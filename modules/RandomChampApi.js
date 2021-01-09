const Discord = require('discord.js')
const Canvas = require('canvas')
const snekfetch = require('snekfetch')

const LoudOuts = require('./loudouts/main')
const Champions = require('./champion/champion')

let version = ""

let championSelected = []
let champion = ""

const canvas =  Canvas.createCanvas(800, 600)
const ctx = canvas.getContext("2d", { alpha: false })
ctx.font = "35px Arial"
ctx.fillStyle = "white"
ctx.textAlign = "center"

module.exports.run = (message) => {
    message.reply("Wait for few seconds to get a random loud out")
    currentVersion()
    LoudOuts.run(version).then(async (r)=>{
        switch(r.LoudOutSimplified){
            case "AP":
                await Champions.fetch(version,r.LoudOutSimplified).then((r)=>championSelected = r[getRandomInt(r.length)])
                break;
            case "AD":
                await Champions.fetch(version,r.LoudOutSimplified).then((r)=>championSelected = r[getRandomInt(r.length)])
                break;
            case "Tank":
                await Champions.fetch(version,r.LoudOutSimplified).then((r)=>championSelected = r[getRandomInt(r.length)])
                break;
        }

        champion = championSelected[0]

        const background = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+champion+"_0.jpg")


        // generating random 7 items pictures

        let firstItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.FirstLegendaryItem[0]+".png")

        let secondItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.SecondLegendaryItem[0]+".png")

        let thirdItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.ThirdLegendaryItem[0]+".png")

        let fourthItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.ForthLegendaryItem[0]+".png")

        let MythicItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/"+version+"/img/item/"+r.MythicItem[0]+".png")


        //Canvas Background

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //Champion Display

        ctx.fillStyle = "white"

        ctx.drawImage(background,0, 0, 350, canvas.height)

        ctx.fillText(champion, 170, 40)
        ctx.font = "20px Arial"
        ctx.fillText(r.LoudOutResult, 170, 70)

        //Mythic Item Display

        ctx.font = "35px Arial"
        ctx.fillStyle = "#bf00bf"

        ctx.fillText("Mythic Item:", 450, 50)

        ctx.drawImage(MythicItemUrl, 360, 80, 70,70)

        ctx.fillText(r.MythicItem[1].name, 610, 130)

        //Legendary Items Display

        ctx.fillStyle = "#F03F22"

        ctx.fillText("Legendary Items:", 485, 200)

        ctx.drawImage(firstItemUrl, 360,220, 70,70)
        ctx.fillText(r.FirstLegendaryItem[1].name, 610, 265)

        ctx.drawImage(secondItemUrl, 360,300, 70,70)
        ctx.fillText(r.SecondLegendaryItem[1].name, 610, 345)

        ctx.drawImage(thirdItemUrl, 360,380, 70,70)
        ctx.fillText(r.ThirdLegendaryItem[1].name, 610, 430)

        ctx.drawImage(fourthItemUrl, 360,460, 70,70)
        ctx.fillText(r.ForthLegendaryItem[1].name, 610, 510)

        let attachment = new Discord.MessageAttachment(
            canvas.toBuffer(),
            "randomchampion.png"
        )
        
        message.channel.send(attachment);
    }).catch((err)=>{
        console.error(err)
        message.channel.send(err.message+". Try to run the command again!")
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
