import express from "express";
import con from "../utils/db.js";
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post("/adminLogin", (req, res) => {

  const sql = "SELECT * from admin WHERE email = ? AND password = ?";

  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    
    if (err) {
      console.error("Query Error:", err);
      return res.json({ loginStatus: false, Error: "Query Error" });

    }
  

    if (result.length > 0) {
      const email = result[0].email;

      //TOKEN
      const token = jwt.sign(
        {role: "admin", email:email}, 
        "CoffeeJunkie-Key", 
        {expiresIn: "1d",}
    );

    res.cookie("token", token)
    return res.json({loginStatus: true})
    }else{
        return res.json({loginStatus:false, Error: 'Wrong email or password'})
    }
  });
});

export { router as adminRouter };
