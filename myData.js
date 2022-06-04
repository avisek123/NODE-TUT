// import mongoose
var mongoose = require("mongoose");
// create a schema for the data
var employeeScheme = mongoose.Schema({
  name: String,
  age: Number,
  salary: Number,
  emailID: String,
});
// create model
var EmployeeModel = mongoose.model("Employee", employeeScheme);
// create object of the model
var employeeObject = new EmployeeModel({
  name: "John",
  age: 30,
  salary: 10000,
  emailID: "",
});
// get method
// employeeObject.get(function(err, data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })
Avisek123;

Jr47MhIl5g6BIDRl;
