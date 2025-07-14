export async function askAI(question: string) {
    const baseUrl = process.env.API_BASE_URL;
    const apiKey = process.env.API_KEY;
    const body = JSON.stringify({ question: question });
    console.log("body:", body);
    console.log("question:", question);

    if(!baseUrl || !apiKey) {
        throw new Error("API_BASE_URL and API_KEY must be defined in .env")
    }

    console.log("making backend call");

    const response = await fetch(`${baseUrl}/api/ask-mesh-ai`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey!
        },
        body
    });

    if(!response.ok) {
        throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json();
    return data;
}