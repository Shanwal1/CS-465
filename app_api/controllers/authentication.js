const passport = require('passport'); 
const mongoose = require('mongoose'); 
const User = mongoose.model('users'); 

const register = async(req, res) => {
    try{
      if (!req.body.name || !req.body.email || !req.body.password) {
            return res      
            .status(400)      
            .json({"message": "All fields required"});  
        }   
        const user = new User();  
        user.name = req.body.name;  
        user.email = req.body.email;  
        user.setPassword(req.body.password);  
        await user.save();
        const token = user.generateJwt();
        res.status(400).json({token});
    }catch(err){
        res.status(400).json(err);

    }
};

const login = async (req, res) => {  
    try{
        if (!req.body.email || !req.body.password) {    
            return res.status(400).json({ message: "All fields required"});  
        }
        const user = await new Promise((resolve, reject) => {
            passport.authenticate('local', (err, user, info) => {
            if (err) {      
                reject(err);
            }else{
                resolve(user);
            }
        
            })(req,res);
        });

        if (!user){
            return res.status(401).json({message: 'Authentication failed'});
        }
        const token = user.generateJwt();
        res.status(200).json({token});
    }catch{
        console.error('Error in Login function', error);
        res.status(500).json({message: 'internal Server Error'});
    }
};
        

module.exports ={
        register,
        login
};