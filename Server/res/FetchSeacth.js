require('dotenv').config()


module.exports= // fungsi async harus punya error handling
async function fetchingdata(keyword,limit,offset) {
  const baseUrl =process.env.BASE_URL

  try {
    const KeyWord=keyword.replace(/-/g," ")
    const res=await fetch(`${baseUrl}/manga?title=${keyword}&limit=${limit}&includes[]=cover_art&offset=${offset}`)
    const Data= await res.json()
    if(!Array.isArray(Data.data) || Data.data.length === 0){
      console.log('Invalid Obejct')
    }
    
    console.log('Getting Fecth Data')
    console.log(`Limit=${limit} Key=${keyword} offset=${offset}`)

    return Data

  }catch(error){
    console.log('Failed Fetching Data')
    return ('Something Went Wrong')
    
  }finally{
    console.log('Fecthing Done')
  }
}