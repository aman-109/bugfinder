const express=require("express")

const router=express.Router()

const {signupUser}=require("../controller/signup")
const {loginUser}=require("../controller/login")

router
.post("/signup",signupUser)
.post("/login",loginUser)


module.exports=router