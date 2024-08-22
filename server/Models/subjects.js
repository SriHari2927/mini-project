const express = require('express')
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    subject : String,
    topic : String,
    description : String,
    lessonname :String,
});

const modelSubjectmodel = mongoose.model("subjects" , subjectSchema)
module.exports = modelSubjectmodel;