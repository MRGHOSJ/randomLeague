const snekfetch = require('snekfetch')

let AllChamps = []
let APChamps = []
let ADChamps = []
let TankChamps = []

module.exports.fetch = async (version, championClass) => {

    await fetchAllChampions(version)
    
    if(championClass === "AP"){
        return APChamps
    }
    if(championClass === "AD"){
        return ADChamps
    }
    if(championClass === "Tank"){
        return TankChamps
    }
    return {
        "error":"FAIL"
    }
}

fetchAllChampions = async (version) => {
    await snekfetch.get('http://ddragon.leagueoflegends.com/cdn/'+version+'/data/en_US/champion.json')
    .then((r)=>{
        for (var i in r.body.data) {
            AllChamps.push([i, r.body.data [i]]);
        }

        AllChamps.forEach((item)=>{

            if(item[1].tags.includes('Mage')){
                return APChamps.push(item)
            }else if(item[1].tags.includes('Assassin')){
                return APChamps.push(item)
            }else if(item[1].tags.includes('Support')){
                return APChamps.push(item)
            }
            
            return
        })
        
        AllChamps.forEach((item)=>{
            if(item[1].tags.includes('Fighter')){
                return ADChamps.push(item)
            }else if(item[1].tags.includes('Marksman')){
                return ADChamps.push(item)
            }
            
            return
        })

        AllChamps.forEach((item)=>{
            if(item[1].tags.includes('Tank')) return TankChamps.push(item);
            
            return
        })
    })
}