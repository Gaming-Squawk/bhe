const discord = require("discord.js-selfbot-v13");

function reloadPresence(client) {
    if (!global.startTime) {
        global.startTime = Date.now();
    }

    const presences = [
        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("PLAYING")
            .setName("NGRP Kerala BETA")
            .setDetails()
            .setState()
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://media.discordapp.net/attachments/1108805442030796970/1267857713786781797/ngrp.gif?ex=66d528c2&is=66d3d742&hm=40b0a178099e560b115a9fd9eb52e2053083c285b9ee596c048efdf9a62a8fe9&")
            .setAssetsLargeText("JOIN")
            .addButton('Join Discord', "https://discord.gg/ngrp-kerala-official-776666577546117151"),

        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("PLAYING")
            .setName("VALORANT")
            .setDetails()
            .setState()
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1281941664587448320/WhatsApp_Image_2024-09-07_at_17.07.12_2ca1642f.jpg?ex=66dd8cb6&is=66dc3b36&hm=8d07aa5c13bd6c6b161262a82b54d7beb16cb667aabd7804e52449bb89d8a71e&")
            .setAssetsLargeText("ENJOY"), // <-- Added missing comma here

        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("PLAYING")
            .setName("PUBG BATTLEGROUNDS")
            .setDetails()
            .setState()
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1281942236115898368/WhatsApp_Image_2024-09-07_at_17.07.13_5dbe1aa0.jpg?ex=66dd8d3e&is=66dc3bbe&hm=19df6a071b853e991f08e3af79a231ea4414a9b8ba7690d21c62ee325a69280e&")
            .setAssetsLargeText("ENJOY")
    ];

    let currentIndex = 0;

    function updatePresence() {
        client.user.setPresence({
            status: "online",
            activities: [presences[currentIndex].toJSON()]
        });

        currentIndex = (currentIndex + 1) % presences.length;
    }

    // Initial presence update
    updatePresence();

    // Update presence every 2 hours (7200000 ms)
    setInterval(updatePresence, 2 * 60 * 60 * 1000);
}

module.exports = reloadPresence;
