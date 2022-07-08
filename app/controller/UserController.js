var userModel = require('../model/UserModel');
// console.log("RRRR ", proModel)
// Create and Save a new Note

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.create = (req, res) => {

        // Validate request
        // res.send(req.body.name);
        if(!req.body.name) {
            return res.status(400).send({
                message: "Name can not be empty"
            });
        }
        if(!req.body.phone) {
            return res.status(400).send({
                message: "Phone can not be empty"
            });
        }
    
        // Create a Note
        var User = new userModel({
            name: req.body.name, 
            phone: req.body.phone
        });
    
        // Save Note in the database
        User.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};