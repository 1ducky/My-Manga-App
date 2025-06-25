require('dotenv').config()

module.exports = async function Newer(Limit,Offset) {
    const BaseURL=process.env.BASE_URL
    const limit=Limit || 10
    try{
        const res=await fetch(`${BaseURL}/manga?limit=${limit}&order[latestUploadedChapter]=desc&includes[]=cover_art&offset=${Offset}`)
        const Data=await res.json()
        if(!Array.isArray(Data.data) || Data.data.length === 0){
            console.log('invalid Obejct')

        }else{
            console.log('Getting Fecth Data')
            console.log(`Limit=${Limit} offset=${Offset}`)

            return Data
        }
    }catch(error){
        console.log('Failed Fetching Data')
        return ('Something Went Wrong')
    }finally{
        console.log('Fetching Done')
    }
}