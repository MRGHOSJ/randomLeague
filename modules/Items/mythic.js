const snekfetch = require('snekfetch')

let Allitems = []
let MythicItemsArray = []
let CriticalStrikeMythicItems = []
let LifeStealMythicItems = []
let AdMythicItems = []
let AttackSpeedMythicItems = []
let ApMythicItems = []
let ManaMythicItems = []
let TankMythicItems = []

module.exports.fetch = async (version) => {

    await fetchMythicItems(version)

    console.log("FIRST LOG:",AdMythicItems.length)

    return {
        'AD':AdMythicItems,
        'CriticalStrike':CriticalStrikeMythicItems,
        'LifeSteal':LifeStealMythicItems,
        'AttackSpeed':AttackSpeedMythicItems,
        'Tank':TankMythicItems,
        'Mana':ManaMythicItems,
        'AP':ApMythicItems,
    }
    
}

fetchMythicItems = async (version) => {
    await snekfetch.get('http://ddragon.leagueoflegends.com/cdn/'+version+'/data/en_US/item.json')
    .then((r)=>{
        for (var i in r.body.data) {
            Allitems.push([i, r.body.data [i]]);
        }
        Allitems.forEach((item)=>{
            if(item[1].description.includes("rarityMythic") === false) return;

            MythicItemsArray.push(item)
        })

        MythicItemsArray.forEach((item)=>{

            if(item[0] === "6617" || item[0] === "4005") return;

            if(item[1].description.includes("Attack Speed")){
                AttackSpeedMythicItems.push(item)
            }

            if(item[1].description.includes("Life Steal")){
                LifeStealMythicItems.push(item)
            }

            if(item[1].tags.includes("CriticalStrike")){
                CriticalStrikeMythicItems.push(item)
            }
            
            if(item[1].tags.includes("Damage")){
                AdMythicItems.push(item)
            }
            
            if(item[1].tags.includes("Armor") || item[0] === "2065"){
                TankMythicItems.push(item)
            }
            
            if(item[1].tags.includes("Mana")){
                ManaMythicItems.push(item)
            }

            if(item[1].tags.includes("AbilityHaste") || item[1].tags.includes("SpellDamage")){
                ApMythicItems.push(item)
            }

            
        })
    })
}