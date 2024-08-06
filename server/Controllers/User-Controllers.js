
const modelAppmodel = require('../Models/User');




  const getUser = (req, res,next) => {
  const {name, email,password} = req.body;
  modelAppmodel.findOne({email:email})
  .then(user=> {
    if(user) {
        res.json("Already Have an Account")
    }else{
        modelAppmodel.create({name : name, email:email, password:password})
      
        .then(result => res("Account created"))
        .catch(err => res.json(err))
    }
  }).catch(err => res.json(err))
};




const loginUser = (req,res,next) => {
    const {email,password} = req.body;
    modelAppmodel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("No Account Existed")
        }
    })
}
module.exports = { getUser,loginUser};