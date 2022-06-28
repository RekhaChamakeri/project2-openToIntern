const collegeModel= requre("../models/collegeModel")
const {isValid, isValidName, isValidCollegeName}=require("../middleware/validation")

const createCollege=async function(req,res){
    try{
        let{name,fullName,logoLink}=req.body
        
        if(Object.keys(req.body).length<1) {return res.status(400).send({msg:"Insert data :Bad request"})}

        if (!isValid(name)) {
            return res.status(400).send({ msg: "Enter College Name" })
        }
        if (!isValidCollegeName(name)) {
            return res.status(400).send({ msg: "Enter a valid College Name" })
        }
        if (!isValid(fullName)) {
            return res.status(400).send({ msg: "Enter College Full Name" })
        }
        if (!isValidName(fullName)) {
            return res.status(400).send({ msg: "Enter a valid full Name contains only alphabets" })
        }
        if (!isValid(logoLink)) {
            return res.status(400).send({ msg: "Enter College Logo-Link" })
        }
        if (!isValidLink(logoLink)) {
            return res.status(400).send({ msg: "Enter a valid url" })
        }

        let collegeData=await collegeModel.create(req.body)
        res.status(201).send(collegeData)
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports.createCollege=createCollege