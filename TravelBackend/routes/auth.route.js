import express from "express"
import { signin, signup } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/signup", signup)// this is the end point of sign_up_Api "/signup" and the secondone signup  is a function which is define in the controllers 
router.post("/signin", signin)

export default router

// import express from "express"


// const router = express.Router()

// router.post("/signup",signup)

// export default route