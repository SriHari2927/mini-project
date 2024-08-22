const express = require('express');
const { addSubject, getSubject, updateSubject, getUserbyId,addOrUpdateSubject , deleteId } = require('../Controllers/Subject-Controllers');

const subjectRouter = express.Router();

subjectRouter.post('/add', addSubject);
subjectRouter.get('/getAll', getSubject);
subjectRouter.put('/update/:id', updateSubject)
subjectRouter.get('/getuser/:id' , getUserbyId)
subjectRouter.delete('/delete/:id', deleteId)
subjectRouter.post('/addOrUpdateSubject',addOrUpdateSubject )
// subjectRouter.post('/view/:id' , viewId)
module.exports = subjectRouter;
