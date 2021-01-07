const Discord = require('discord.js')
const Canvas = require('canvas')
const snekfetch = require('snekfetch')

const LoudOuts = require('./loudouts/main')
const Champions = require('./champion/champion')

let version = ""

let championSelected = []
let champion = ""

const canvas =  Canvas.createCanvas(450, 300)
const ctx = canvas.getContext("2d", { alpha: false })
ctx.font = "20px Arial"
ctx.fillStyle = "white"
ctx.textAlign = "center"

module.exports.run = (message) => {
    currentVersion()
    LoudOuts.run(version).then(async (r)=>{
        switch(r.LoudOutSimplified){
            case "AP":
                Champions.fetch(version,r.LoudOutSimplified).then((r)=>championSelected = r[getRandomInt(r.length)])
                break;
            case "AD":
                Champions.fetch(version,r.LoudOutSimplified).then((r)=>championSelected = r[getRandomInt(r.length)])
                break;
            case "Tank":
                Champions.fetch(version,r.LoudOutSimplified).then((r)=>championSelected = r[getRandomInt(r.length)])
                break;
        }

        champion = championSelected[0]

        console.log(champion)

        const background = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+champion+"_0.jpg")


        // generating random 7 items pictures
        console.log(r.FirstLegendaryItem)
        console.log(r.FirstLegendaryItem[0])

        let firstItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.FirstLegendaryItem[0]+".png")

        let secondItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.SecondLegendaryItem[0]+".png")

        let thirdItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.ThirdLegendaryItem[0]+".png")

        let fourthItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.ForthLegendaryItem[0]+".png")

        let fifthItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.MythicItem[0]+".png")


        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)


        // top row items

        ctx.fillText("Items:", 50, 50)

        ctx.drawImage(firstItemUrl,20,60, 50,50)

        ctx.drawImage(secondItemUrl,80,60, 50,50)

        ctx.drawImage(thirdItemUrl,140,60, 50,50)

        ctx.drawImage(fourthItemUrl,200,60, 50,50)

        ctx.drawImage(fifthItemUrl,260,60, 50,50)

        const attachment = new Discord.MessageAttachment(
            canvas.toBuffer(),
            "randomchampion.png"
        )

        const RandomChampEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Champion: "+champion)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setThumbnail("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/"+champion+".png")
        .addField("Role: ", r.LoudOutSimplified)
        .attachFiles(attachment)
        .setTimestamp()
        .setFooter('Random Champion Generator');

        
        message.channel.send(RandomChampEmbed);
    }).catch((err)=>{
        console.log(err)
    })
    
}

getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

currentVersion = async () => {
    await snekfetch.get('https://ddragon.leagueoflegends.com/api/versions.json')
    .then(r =>{
        let body = r.body

        version = body[0]

    }).catch(r =>{console.log(r)
    })
    
}
