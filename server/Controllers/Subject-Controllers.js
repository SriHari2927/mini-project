const modelSubjectmodel = require('../Models/subjects')


const addSubject = (req,res,next) => {
    const {subject,topic,description,lessonname} = req.body;
    modelSubjectmodel.create(req.body) 
    .then(subjects => res.json(subjects))
    .catch(error => res.json(error))
};



const getSubject = (req,res,next) => {
    modelSubjectmodel.find({})
    .then(subjects => {console.log(subjects) 
      return res.json(subjects)})
    .catch(error => res.json(error))
};

// Add or update a subject with lessonname
const addOrUpdateSubject = (req, res, next) => {
  const { id, lessonname } = req.body;

  modelSubjectmodel.findByIdAndUpdate(
    id,
    { lessonname: lessonname },
    { new: true } // Return the updated document
  )
  .then(subject => {
    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    res.json(subject);
  })
  .catch(error => {
    console.error(error);
    res.status(500).json({ error: 'Failed to update subject' });
  });
};

// Get a subject by ID
const getUserbyId = (req, res, next) => {
  const { id } = req.params;
  
  modelSubjectmodel.findById(id)
    .then(subject => {
      if (!subject) {
        return res.status(404).json({ error: 'Subject not found' });
      }
      res.json(subject);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve subject' });
    });
};



const updateSubject = (req, res, next) => {
    const { id } = req.params; 
    const {lessonname} = req.body;
    modelSubjectmodel.findByIdAndUpdate(
      { _id: id },
      {
        subject: req.body.subject,
        topic: req.body.topic,
        description: req.body.description
      },
      {lessonname : lessonname},
    )
    .then(subjects => res.json(subjects))
    .catch(err => console.log(err));
  };
  
// const getUserbyId = (req,res,next) => {
//     const {id} = req.params;
//     modelSubjectmodel.findById(id)
//     .then(subjects => res.json(subjects))
//     .catch(err => console.log(err))
// }
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


module.exports = {addSubject , getSubject, updateSubject, getUserbyId,addOrUpdateSubject , deleteId};