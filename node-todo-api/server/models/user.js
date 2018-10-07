var mongoose = require('mongoose');
const User = mongoose.model('User', {
   email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
   }
});

// var newUser = new User({
//     email: 'dmehta9@uncc.edu'
// })
// console.log(newUser);

// newUser.save().then((doc) => {
//     console.log('Saved User', doc);
// }, (e) => {
//     console.log('Unable to save user');
// });

module.exports = {
    User
}