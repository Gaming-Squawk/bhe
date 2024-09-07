const discord = require("discord.js-selfbot-v13");

function reloadPresence(client) {
    // Ensure global.startTime is set
    if (!global.startTime) {
        global.startTime = Date.now();
    }

    // Create the RichPresence object
    const activity = new discord.RichPresence()
        .setApplicationId("1256607227444330606") // Replace with your own bot application id
        .setType("PLAYING") // Adjust based on the activity type you want
        .setName("NGRP Kerala")
        .setDetails()
        .setState() // Set the activity state
        .setStartTimestamp(global.startTime) // Make sure global.startTime is defined correctly
        .setAssetsLargeImage("https://media.discordapp.net/attachments/1108805442030796970/1267857713786781797/ngrp.gif?ex=66bacac2&is=66b97942&hm=ac5648323cc5bccb57daeaee4f93015f08ac3a8b067ce98c323d2c8fb6cc1919&")
        .setAssetsLargeText("")
        .addButton('Join Discord', "https://discord.gg/ngrp-kerala-official-776666577546117151");

    // Set the activity and status
    client.user.setPresence({
        status: "online", // Set bot status: online, idle, dnd, invisible
        activities: [activity.toJSON()]
    });
}

module.exports = reloadPresence;