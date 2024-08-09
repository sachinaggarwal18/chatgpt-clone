import express from "express";
import ImageKit from "imagekit";

const port = process.env.PORT || 3000;
const app = express();

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLICKEY,
    privateKey: process.env.IMAGE_KIT_PRIVATEKEY,
  });

app.get("/api/upload", (req,res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.listen(port,()=>{
    console.log("hxnir");
})