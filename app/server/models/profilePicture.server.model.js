var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var profilePicSchema = new Schema({
        uploadedBy: Object,
        path:String,
        uploaded_date: {
         type: Date,
         default: Date.now
    }

 });
 
// return the model
module.exports = mongoose.model('profilePicture', profilePicSchema);