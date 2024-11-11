const express = require('express');
var router = express.Router();
router.get("/",async()=>{
})

router.post("/verify",async(req,res)=>{
    const {name,email, password} =await req.body;
    console.log(name,email, password);
});
// module.exports=router;
module.exports=router;