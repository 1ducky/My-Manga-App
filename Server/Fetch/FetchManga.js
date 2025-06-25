require('dotenv').config()

module.exports = async function FetchManga(ID) {
    BaseURL=process.env.BASE_URL
    try{
        const res=await fetch(`${BaseURL}/manga/${ID}?includes[]=cover_art&includes[]=author&includes[]=artist`)
        const Data=await res.json()
        const statistic=await fetch(`${BaseURL}/statistics/manga/${ID}`)
        const StatData= await statistic.json()
        if(!Data.data || !StatData.statistics){
            console.log('invalid Obejct')

        }else{
            console.log('Getting Fecth Data')
            console.log(`Request=${ID}`)

            return {Data,StatData}
        }
    }catch(error){
        console.log('Failed Fetching Data')
        return ('Something Went Wrong')
    }finally{
        console.log('Fetching Done')
    }
}