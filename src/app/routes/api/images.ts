import express from 'express'
import thumbImage from '../../process/imageProcess'

const images = express.Router()

images.get('/', async (req, res)=>{
    const filename = req.query["filename"]
    console.log(req.query["filename"])
    console.log(req.query["width"])
    console.log(req.query["height"])
    await thumbImage(req.query["filename"] as string, req.query["width"] as string, req.query["height"] as string)    
   .then(data=>{
    if(data)
     res.sendFile(data.filename, { root: data.url })
   })
    
})

export default images;