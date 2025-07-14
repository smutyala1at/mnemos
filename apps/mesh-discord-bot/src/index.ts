import { Client, GatewayIntentBits, Events } from "discord.js";
import { registerSlashCommands } from "./discord/registerSlashCommand";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
})

client.once(Events.ClientReady, async () => {
    await registerSlashCommands([
        {
            name: "ask-mesh-ai",
            description: "MeshAI helps to answer user's query related to MeshJS",
            options: [{
                name: "query",
                description: "Please ask your question",
                type: 3,
                required: true
            }]
        }
    ])
});

client.login(process.env.DISCORD_TOKEN);