// -----------Loud outs------------

/*
-------------(0) = AD----------------
"FAD":"Full AD",
"ADT":"AD TANK"
"FLS":"Full life steal",
"FL":"Full lethality",
"FC":"Full crit",
"ADLS":"AD + Life steal",
"ADL":"AD + lethality",
"ADC":"AD + crit",
"LSL":"life steal + lethality",
"LSC":"life steal + crit",
"LC":"lethality + crit",
"FAS":"Full Attack Speed",
"LSAS":"Life Steal + Atack Speed",
"LAS":"Lethality + Atack Speed",
"AAS":"AD + Attack Speed",
"CAS":"Crit + Attack Speed",
--------------------------------
-------------(1) = AP----------------
"FAP":"Full AP",
"APT":"AP + TANK",
"APAS":"Ap + attack speed",
"APM":"Ap + mana"
--------------------------------
-------------(3) = Tank----------------
"FT":"Full Tank"
--------------------------------
*/

const MythicItems = require("../Items/mythic")
const LegendaryItems = require("../Items/legendary")

let loudoutResult = ""
let SimplifiedLoudoutResult = ""
let MythicItem = []
let FirstLegendaryItem = []
let SecondLegendaryItem = []
let ThirdLegendaryItem = []
let ForthLegendaryItem = []

const json = require("./guide.json")
module.exports.run = async (version) =>{
    await loudout(version)

    return{
        "LoudOutSimplified":SimplifiedLoudoutResult,
        "LoudOutResult":loudoutResult,
        "MythicItem":MythicItem,
        "FirstLegendaryItem":FirstLegendaryItem,
        "SecondLegendaryItem":SecondLegendaryItem,
        "ThirdLegendaryItem":ThirdLegendaryItem,
        "ForthLegendaryItem":ForthLegendaryItem
    }
}

getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

loudout = async (version) => {
    
    // 4 Legendary Items
    // 1 Mythic Item

    switch(getRandomInt(3)){
        case 0:
            SimplifiedLoudoutResult = "AD"
            switch(json.AD[getRandomInt(json.AD.length)]){
                case "FAD":
                    //Full AD
                    loudoutResult = "Full AD"
                    await MythicItems.fetch(version).then((r)=>{
                        MythicItem = r.AD[getRandomInt(r.AD.length)]
                    }).catch((err)=>{console.error(err.message)})

                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        SecondLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        ThirdLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        ForthLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "ADT":
                    //AD + Tank
                    loudoutResult = "AD + Tank"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.Tank[getRandomInt(r.Tank.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AD[getRandomInt(r.AD.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        SecondLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        ThirdLegendaryItem = r.Tank[getRandomInt(r.Tank.length)]
                        ForthLegendaryItem = r.Tank[getRandomInt(r.Tank.length)]
                    }).catch((err)=>{console.error(err.message)})
                
                break;
                case "FLS":
                    //Full Life Steal
                    loudoutResult = "Full Life steal"
                    await MythicItems.fetch(version).then((r)=>{
                        MythicItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                    }).catch((err)=>{console.error(err.message)})

                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                        SecondLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                        ThirdLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                        ForthLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "FL":
                    //Full Lethality
                    loudoutResult = "Full lethality"
                    await MythicItems.fetch(version).then((r)=>{
                        MythicItem = r.AD[getRandomInt(r.AD.length)]
                    }).catch((err)=>{console.error(err.message)})

                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                        SecondLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                        ThirdLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                        ForthLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "FC":
                    //Full Crit
                    loudoutResult = "Full crit"
                    await MythicItems.fetch(version).then((r)=>{
                        MythicItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                    }).catch((err)=>{console.error(err.message)})

                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                        SecondLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                        ThirdLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                        ForthLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "ADLS":
                    //AD + Life Steal
                    loudoutResult = "AD + Life Steal"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AD[getRandomInt(r.AD.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        SecondLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        ThirdLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                        ForthLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "ADL":
                    //AD + Lethality
                    loudoutResult = "AD + Lethality"
                    await MythicItems.fetch(version).then((r)=>{
                        MythicItem = r.AD[getRandomInt(r.AD.length)]
                    }).catch((err)=>{console.error(err.message)})
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        SecondLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        ThirdLegendaryItem = r.Lethality[getRandomInt(r.Tank.length)]
                        ForthLegendaryItem = r.Lethality[getRandomInt(r.Tank.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "ADC":
                    //AD + Crit
                    loudoutResult = "AD + Crit"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AD[getRandomInt(r.AD.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        SecondLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        ThirdLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                        ForthLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "LSL":
                    //Life Steal + Lethality
                    loudoutResult = "Life steal + Lethality"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AD[getRandomInt(r.AD.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                        SecondLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                        ThirdLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                        ForthLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "LSC":
                    //Life Steal + Crit
                    loudoutResult = "Life steal + crit"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                        SecondLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                        ThirdLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                        ForthLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "LC":
                    //Lethality + Crit
                    loudoutResult = "crit + Lethality"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AD[getRandomInt(r.AD.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                        SecondLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                        ThirdLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                        ForthLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "FAS":
                    //Full Attack Speed
                    loudoutResult = "Full Attack Speed"
                    await MythicItems.fetch(version).then((r)=>{
                        MythicItem = r.AttackSpeed[getRandomInt(r.Tank.length)]
                    }).catch((err)=>{console.error(err.message)})
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        SecondLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        ThirdLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        ForthLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "LSAS":
                    //Life Steal + Attack Speed
                    loudoutResult = "Atack Speed + Life Steal"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        SecondLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        ThirdLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                        ForthLegendaryItem = r.LifeSteal[getRandomInt(r.LifeSteal.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "LAS":
                    //Lethality + Attack Speed
                    loudoutResult = "Atack Speed + Lethality"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AD[getRandomInt(r.AD.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        SecondLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        ThirdLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                        ForthLegendaryItem = r.Lethality[getRandomInt(r.Lethality.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "AAS":
                    //AD + Attack Speed
                    loudoutResult = "AD + Attack Speed"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AD[getRandomInt(r.AD.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        SecondLegendaryItem = r.AD[getRandomInt(r.AD.length)]
                        ThirdLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        ForthLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "CAS":
                    //Crit + Attack Speed
                    loudoutResult = "Attack Speed + Crit"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        SecondLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        ThirdLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                        ForthLegendaryItem = r.CriticalStrike[getRandomInt(r.CriticalStrike.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
            }
            break;
        case 1:
            SimplifiedLoudoutResult = "AP"
            switch(json.AP[getRandomInt(json.AP.length)]){
                case "FAP":
                    //Full AP
                    loudoutResult = "Full AP"
                    await MythicItems.fetch(version).then((r)=>{
                            MythicItem = r.AP[getRandomInt(r.AP.length)]
                            }).catch((err)=>{console.error(err.message)})
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                        SecondLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                        ThirdLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                        ForthLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "APT":
                    //AP + Tank
                    loudoutResult = "AP + Tank"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.Tank[getRandomInt(r.Tank.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AP[getRandomInt(r.AP.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                        SecondLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                        ThirdLegendaryItem = r.Tank[getRandomInt(r.Tank.length)]
                        ForthLegendaryItem = r.Tank[getRandomInt(r.Tank.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "APAS":
                    //AP + Attack Speed
                    loudoutResult = "AP + attack speed"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AP[getRandomInt(r.AP.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                        SecondLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                        ThirdLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                        ForthLegendaryItem = r.AttackSpeed[getRandomInt(r.AttackSpeed.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
                case "APM":
                    //AP + Mana
                    loudoutResult = "AP + Mana"
                    switch(getRandomInt(2)){
                        case 0:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.AP[getRandomInt(r.AP.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                        case 1:
                            await MythicItems.fetch(version).then((r)=>{
                                MythicItem = r.Mana[getRandomInt(r.Mana.length)]
                            }).catch((err)=>{console.error(err.message)})
                            break;
                    }
                    
                    await LegendaryItems.fetch(version).then((r)=>{
                        FirstLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                        SecondLegendaryItem = r.AP[getRandomInt(r.AP.length)]
                        ThirdLegendaryItem = r.Mana[getRandomInt(r.Mana.length)]
                        ForthLegendaryItem = r.Mana[getRandomInt(r.Mana.length)]
                    }).catch((err)=>{console.error(err.message)})
                break;
            }
            break;
        case 2:
            SimplifiedLoudoutResult = "Tank"
            //Full Tank
            loudoutResult = "FULL TANK"
            await MythicItems.fetch(version).then((r)=>{
                MythicItem = r.Tank[getRandomInt(r.Tank.length)]
            }).catch((err)=>{console.error(err.message)})
            
            await LegendaryItems.fetch(version).then((r)=>{
                FirstLegendaryItem = r.Tank[getRandomInt(r.Tank.length)]
                SecondLegendaryItem = r.Tank[getRandomInt(r.Tank.length)]
                ThirdLegendaryItem = r.Tank[getRandomInt(r.Tank.length)]
                ForthLegendaryItem = r.Tank[getRandomInt(r.Tank.length)]
            }).catch((err)=>{console.error(err.message)})
            break;
    }
}