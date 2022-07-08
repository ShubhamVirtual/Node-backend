/*module.exports = function(app, db) {
};*/

module.exports = function(app, db) {  

    const usercontroller = require('../controller/UserController');

    app.get('/', (req, res) => {    // You'll create your note here.    
        res.send('Hello')
    });

    app.get('/test', usercontroller.test);

    app.post('/user-create', usercontroller.create);
};