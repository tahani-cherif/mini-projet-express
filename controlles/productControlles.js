const db=require('../models')
const User=db.user

//ajout

const adduser=async(req,res)=>{
    let info={
        nom:req.body.nom,
        prenom:req.body.prenom,
        age:req.body.age
    }
    const user= await User.create(info)
    res.status(200).send(user)
}
//affiche
 const getalluser=async(req,res)=>
{

    let user= await User.findAll()
    res.status(200).send(user)
}
// affiche par id 

const getoneuser=async(req,res)=>{
    let id=req.params.id
    const user= await User.findOne({where:{id:id}})
    res.status(200).send(user)
    console.log(id)
}
//updite user
const upditeuser=async(req,res)=>
{
    let ID=req.params.id

   const user= await User.findOne({where:{id:ID}})
     await user.update(req.body,{where:{id:ID}})
    res.status(200).send(user)
}
//supp user
 const suppuser=async(req,res)=>{
    let id=req.params.id
    const user= await User.findOne({where:{id:id}})
    await user.destroy({where:{id:id}})
    res.status(200).send("user supprimer")
 }
 module.exports={
    adduser,
    getalluser,
    upditeuser,
    suppuser,
    getoneuser

 }