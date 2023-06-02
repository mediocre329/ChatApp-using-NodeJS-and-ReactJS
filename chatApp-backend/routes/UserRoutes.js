const router = require('express').Router();
const User = require('../models/User');

//register
router.post('/', async(req, res) => {
    try { 
        const {name, email, password} = req.body;
        console.log(req.body);
        const user = await User.create({name, email, password});
        res.status(201).json(user);
    } catch (e) { 
        let msg;
        if(e.code == 11000) { 
            msg = "Email already exists";
        }
        else {
            msg = e.message;
        }
        console.log(e);
        res.status(400).json(msg)
    }
})

//login
router.post('/login', async(req, res) => { 
    try { 
        const {email, password} = req.body;
        const user = await User.findByCredentials(email, password);
        user.status = 'is active';
        await user.save();
        res.status(200).json(user);
    } catch (e) { 
        res.status(400).json(e.message)
    }
})

module.exports = router