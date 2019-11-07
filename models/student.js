const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String },
    phone: { type: Number },
    course: { type: String, required: true },
    status: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
