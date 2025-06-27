require('dotenv').config()


module.exports = async function FetchingData(UID,Limit,Offset) {
    const BaseURL=process.env.BASE_URL

    try{
        const res= await fetch(`${BaseURL}/manga?includedTags[]=${UID}&limit=${Limit}&includes[]=cover_art&offset=${Offset}&order[latestUploadedChapter]=desc`)
        const Data= await res.json()

        if(!Array.isArray(Data.data) || Data.data.length === 0){
            console.log('invalid Object')
        }else{
            console.log('Getting Fecth Data')
            console.log(`Limit=${Limit} Key=${UID} Offset=${Offset}`)

            return Data
        }
    }catch(error){
        console.log('Failed Fetching Data')
        return ('Something Went Wrong')

    }finally{
        console.log('Fetching Done')
    }
}