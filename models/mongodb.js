const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://abhi_user1:abhi1MongoDB@cluster1.omlq013.mongodb.net/studentDB", { useNewUrlParser: true });

var studentSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: [true, "Please check the student name, the value cannot be empty"],
        maxLength: 26
    },
    studentAdNo: {
        type: String,
        required: [true, "Please check the student Addmission Number, the value cannot be empty"],
    },
    studentClass: {
        type: String,
        required: [true, "Please check the student class, the value cannot be empty"],
    }
})

module.exports = mongoose.model("student", studentSchema);