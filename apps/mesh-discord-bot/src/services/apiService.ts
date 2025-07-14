export async function askAI(question: string) {
    const response = await fetch(`${process.env.API_BASE_URL}/api/ask-mesh-ai`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.API_KEY!
        },
        body: JSON.stringify({
            question: question
        }),
    });

    if(!response.ok) {
        throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json();
    return data;
}