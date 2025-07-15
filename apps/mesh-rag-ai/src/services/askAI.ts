import { supabase } from "../supabase/supabaseClient";
import { getAnswerFromOpenAI, getEmbedding } from "./openAIService";


export async function askAI(question: string): Promise<string> {
    try {
        console.time("Total askAI time");

        console.time("Embedding");
        const queryEmbedding = await getEmbedding(question);
        console.timeEnd("Embedding");

        console.time("Supabase match_documents");
        const { data, error } = await supabase.rpc("match_documents", {
            query_embedding: queryEmbedding,
            match_threshold: 0.8,
            match_count: 3,
        });
        console.timeEnd("Supabase match_documents");

        if (error) {
            console.error("Error retrieving documents from DB:", error.message);
            return "An error occured while retrieving information.";
        }

        if (!data || data.length === 0) {
            return "Couldn't find any relevant information to answer the question";
        }

        const context = data.map((doc: any) => doc.content).join("\n\n");

        console.time("OpenAI Answer");
        const answer = await getAnswerFromOpenAI(question, context);
        console.timeEnd("OpenAI Answer");

        console.timeEnd("Total askAI time");

        return answer;
    } catch (error) {
        console.error("Error occured while asking question:", error);
        return "An unexpected error occured";
    }
}
