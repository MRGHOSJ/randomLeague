const Discord = require('discord.js')
const Canvas = require('canvas')
const snekfetch = require('snekfetch')

let version = ""

let firstItem = ""

let secondItem = ""

let thirdItem = ""

let fourthItem = ""

let fifthItem = ""

let sixthItem = ""

let seventhItem = ""

let firstJungleItem = ""

let SecondJungleItem = ""

let firstBoots = ""

let SecondBoots = ""

const canvas =  Canvas.createCanvas(450, 300)
const ctx = canvas.getContext("2d", { alpha: false })
ctx.font = "20px Arial"
ctx.fillStyle = "white"
ctx.textAlign = "center"

module.exports.run = (message) => {
    currentVersion()
    setTimeout(
        function(){
            RandomItems()
            RandomChamp(message)
        }
        , 1000);
    
}

currentVersion = async () => {
    await snekfetch.get('https://ddragon.leagueoflegends.com/api/versions.json')
    .then(r =>{
        let body = r.body

        version = body[0]

    }).catch(r =>{console.log(r)
    })
}

RandomItems = async () => {
    await snekfetch.get('http://ddragon.leagueoflegends.com/cdn/'+version+'/data/en_US/item.json')
    .then(r =>{
        let body = r.body
        let Allitems = []
        let ChosenRole = ""
        let AdItems = ["AdItems"]
        let TankItems = ["TankItems"]
        let ApItems = ["ApItems"]
        let RandomItems = ["RandomItems"]
        let Items = [
            AdItems,
            TankItems,
            ApItems,
            RandomItems
        ]
        let JungleItems = []
        let Boots = []

        for (var i in body.data) {
            Allitems.push([i, body.data [i]]);
        }

        Allitems.forEach((el)=>{
            if(el[1].gold.total <= 1400) return;
            if(el[1].tags.length !== 0) return;
            if(el[1].into !== undefined) return;
            if(el[1].requiredAlly === "Ornn") return;
            if(el[1].requiredChampion === "Gangplank") return;
            if(el[0] === "3671" || el[0] === "3672" || el[0] === "3673" || el[0] === "3675") return;

            JungleItems.push(el)
                
        })

        Allitems.forEach((el)=>{
            if(!(el[1].tags.includes("Boots"))) return;
            if(el[0] === "1001" || el[0] === "2422") return;

            Boots.push(el)
        })

        Allitems.forEach((el)=>{
            
            if(el[1].gold.total <= 1400) return;
            if(el[1].tags.indexOf("Jungle") > -1) return;
            if(el[1].tags.length === 0) return;
            if(el[1].into !== undefined) return;
            if(el[1].tags.includes("Active")) return;
            if(el[1].gold.purchasable === false) return;
            if(el[1].requiredChampion) return;
            if(el[0] === "3084" || el[0] == "3137") return;

            if(el[1].tags.indexOf("Damage") || el[1].tags.indexOf("AttackSpeed")){
                AdItems.push(el)
            }
            
            if(el[1].tags.indexOf("SpellBlock")|| el[1].tags.indexOf("Health") || el[1].tags.indexOf("Health")){
                TankItems.push(el)
            }
            
            if(el[1].tags.indexOf("SpellDamage")){
                ApItems.push(el)
            }
            
            Items.RandomItems.push(el)

        })

        ChosenRole = Items[Math.floor(Math.random() * (Items.length - 0)) + 0]

        console.log(ChosenRole[0])

        // generating 7 random items 

        firstItem = ChosenRole[Math.floor(Math.random() * (ChosenRole.length - 1)) + 1][0]

        secondItem = ChosenRole[Math.floor(Math.random() * (ChosenRole.length - 1)) + 1][0]

        thirdItem = ChosenRole[Math.floor(Math.random() * (ChosenRole.length - 1)) + 1][0]

        fourthItem = ChosenRole[Math.floor(Math.random() * (ChosenRole.length - 1)) + 1][0]

        fifthItem = ChosenRole[Math.floor(Math.random() * (ChosenRole.length - 1)) + 1][0]

        sixthItem = ChosenRole[Math.floor(Math.random() * (ChosenRole.length - 1)) + 1][0]

        seventhItem = ChosenRole[Math.floor(Math.random() * (ChosenRole.length - 1)) + 1][0]

        // generating 2 jungle items
        
        firstJungleItem = JungleItems[Math.floor(Math.random() * (JungleItems.length - 0)) + 0][0]

        SecondJungleItem = JungleItems[Math.floor(Math.random() * (JungleItems.length - 0)) + 0][0]

        // generating 2 boots

        firstBoots = Boots[Math.floor(Math.random() * (Boots.length - 0)) + 0][0]

        SecondBoots = Boots[Math.floor(Math.random() * (Boots.length - 0)) + 0][0]


    }).catch(r =>{console.log(r)
    })
}

RandomChamp = async (message) => {
    await snekfetch.get('http://ddragon.leagueoflegends.com/cdn/'+version+'/data/en_US/champion.json')
    .then(async (r) =>{

        message.reply("Please wait some seconds while we get you a random champion with random items!")

        let body = r.body

        let champions = []
        
        let champion = ""

        for (var i in body.data) {
            champions.push([i, body.data [i]]);
            
        }

        let randomNumber = Math.floor(Math.random() * (champions.length - 0)) + 0

        champion = champions[randomNumber][0]

        const background = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+champion+"_0.jpg")


        // generating random 7 items pictures

        let firstItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+firstItem+".png")

        let secondItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+secondItem+".png")

        let thirdItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+thirdItem+".png")

        let fourthItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+fourthItem+".png")

        let fifthItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+fifthItem+".png")
        
        let sixthItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+sixthItem+".png")

        let seventhItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+seventhItem+".png")

        // generating random 2 jungle items

        let firstJungleItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+firstJungleItem+".png")

        let SecondJungleItemUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+SecondJungleItem+".png")

        //generating random 2 boots items 

        let firstBootsUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+firstBoots+".png")

        let SecondBootsUrl = await Canvas.loadImage("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/item/"+SecondBoots+".png")


        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)


        // top row items

        ctx.fillText("Items:", 50, 50)

        ctx.drawImage(firstItemUrl,20,60, 50,50)

        ctx.drawImage(secondItemUrl,80,60, 50,50)

        ctx.drawImage(thirdItemUrl,140,60, 50,50)

        ctx.drawImage(fourthItemUrl,200,60, 50,50)

        ctx.drawImage(fifthItemUrl,260,60, 50,50)

        ctx.drawImage(sixthItemUrl,320,60, 50,50)

        ctx.drawImage(seventhItemUrl,380,60, 50,50)

        // boots
        ctx.fillText("Boots:", 50, 210)
        ctx.drawImage(firstBootsUrl,20,220, 50,50)

        ctx.drawImage(SecondBootsUrl,80,220, 50,50)

        // Jugnel Items

        ctx.fillText("Jungle Items:", 370, 210)

        ctx.drawImage(firstJungleItemUrl,320,220, 50,50)

        ctx.drawImage(SecondJungleItemUrl,380,220, 50,50)

        const attachment = new Discord.MessageAttachment(
            canvas.toBuffer(),
            "randomchampion.png"
        )

        const RandomChampEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Champion: "+champion)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setThumbnail("http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/"+champion+".png")
        .attachFiles(attachment)
        .setTimestamp()
        .setFooter('Random Champion Generator');

        
        message.channel.send(RandomChampEmbed);

    }).catch(r =>{
        return message.reply(r+". Please try again")
    })
}