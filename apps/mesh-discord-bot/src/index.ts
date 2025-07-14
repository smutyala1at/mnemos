import { Client, GatewayIntentBits, Events } from "discord.js";
import { registerSlashCommands } from "./discord/registerSlashCommand";
import { askAI } from "./services/apiService";


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
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


client.on(Events.InteractionCreate, async (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === "ask-mesh-ai") {
        await interaction.deferReply();
        const question = interaction.options.getString("query");
        const response = await askAI(question as string);
        console.log(response);
        await interaction.reply(response.answer);
    }
})

client.login(process.env.DISCORD_TOKEN);