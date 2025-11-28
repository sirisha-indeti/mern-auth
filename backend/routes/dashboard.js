const express=require("express")
const authMiddleware=require("../middleware/authMiddleware")
const router=express.Router()
router.get("/dashboard",authMiddleware,(req,res)=>{
    //res.status(200).json({"message":"dashboard routes",})
    res.json({ "message": "welcome to the website", user: req.user })

})
module.exports=router