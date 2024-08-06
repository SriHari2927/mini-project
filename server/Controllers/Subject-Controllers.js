const modelSubjectmodel = require('../Models/subjects')


const addSubject = (req,res,next) => {
    const {subject,topic,description,lesson_name} = req.body;
    modelSubjectmodel.create(req.body) 
    .then(subjects => res.json(subjects))
    .catch(error => res.json(error))
};



const getSubject = (req,res,next) => {
    modelSubjectmodel.find({})
    .then(subjects => res.json(subjects))
    .catch(error => res.json(error))
};




const updateSubject = (req, res, next) => {
    const { id } = req.params; 
    modelSubjectmodel.findByIdAndUpdate(
      { _id: id },
      {
        subject: req.body.subject,
        topic: req.body.topic,
        description: req.body.description
      }
    )
    .then(subjects => res.json(subjects))
    .catch(err => console.log(err));
  };
  
const getUserbyId = (req,res,next) => {
    const {id} = req.params;
    modelSubjectmodel.findById(id)
    .then(subjects => res.json(subjects))
    .catch(err => console.log(err))
}
const deleteId = (req,res,next) => {
    const id = req.params.id;
    modelSubjectmodel.findByIdAndDelete({_id:id})
    .then(subjects => res.json(subjects))
    .catch(err => console.log(err))
}

// const viewId = (req,res,next) => {
//   const id = req.params.id;
//   modelSubjectmodel.findById({id})
//   .then(subjects => res.json(subjects))
//   .catch(err => console.log(err))
// }


module.exports = {addSubject , getSubject, updateSubject, getUserbyId, deleteId};