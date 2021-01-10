const snekfetch = require('snekfetch')

// Arrays
let Allitems = []
let LegendaryItemsArray = []
let CriticalStrikeLegendaryItems = []
let LethalityLegendaryItems = []
let LifeStealLegendaryItems = []
let AttackSpeedLegendaryItems = []
let AdLegendaryItems = []
let ApLegendaryItems = []
let TankLegendaryItems = []
let ManaLegendaryItems = []
let BlackListedItems = [
                        '6616',
                        '4643',
                        '3222',
                        '3857',
                        '3864',
                        '3860',
                        '3853',
                        '3504',
                        '3109',
                        '3107',
                    ]

module.exports.fetch = async (version) => {

    await fetchLegendaryItems(version)

    return {
        'AD':AdLegendaryItems,
        'CriticalStrike':CriticalStrikeLegendaryItems,
        'Lethality':LethalityLegendaryItems,
        'LifeSteal':LifeStealLegendaryItems,
        'AttackSpeed':AttackSpeedLegendaryItems,
        'Tank':TankLegendaryItems,
        'AP':ApLegendaryItems,
        'Mana':ManaLegendaryItems
    }
    
}

fetchLegendaryItems = async (version) => {
    await snekfetch.get('http://ddragon.leagueoflegends.com/cdn/'+version+'/data/en_US/item.json')
    .then((r)=>{
        for (var i in r.body.data) {
            Allitems.push([i, r.body.data [i]]);
        }
        Allitems.forEach((item)=>{
            if(BlackListedItems.includes(item[0])) return
            if(item[1].description.includes("rarityMythic")) return;
            if(item[1].depth === 3){
                LegendaryItemsArray.push(item)
            }
        })

        LegendaryItemsArray.forEach((item)=>{
            if(item[0] === "6617" || item[0] === "4005") return;

            if(item[1].description.includes("Attack Speed")){
                AttackSpeedLegendaryItems.push(item)
            }

            if(item[1].description.includes("Life Steal")){
                LifeStealLegendaryItems.push(item)
            }
            
            if(item[1].colloq.includes("lethality")){
                LethalityLegendaryItems.push(item)
            }

            if(item[1].tags.includes("CriticalStrike")){
                CriticalStrikeLegendaryItems.push(item)
            }

            if(item[1].tags.includes("Damage")){
                AdLegendaryItems.push(item)
            }
            if(item[1].tags.includes("Armor")|| item[0] === "2065"){
                TankLegendaryItems.push(item)
            }
            if(item[1].tags.includes("Mana")){
                ManaLegendaryItems.push(item)
            }
            if(item[1].tags.includes("SpellDamage")){
                ApLegendaryItems.push(item)
            }

            
        })
    })
}