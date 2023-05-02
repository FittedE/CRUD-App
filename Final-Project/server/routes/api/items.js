const express = require('express');
const router = express.Router();
// const Item = require('../../models/ProductModel');
const productInfo = require('../../models/userModel');
const UserCredInfo = require('../../models/userModel');
const bcrypt = require('bcryptjs');

//router.get('/', (req, res) => {res.send('testing get / item route')});
router.get('/:id', (req, res) => {res.send('testing get /:id route')});
//router.post('/', (req, res) => {res.send('testing post / route')});
router.put('/:id', (req, res) => {res.send('testing put /:id route')});


router.get('/', async(req, res) => {
    try {
        const items = await productInfo.find();
        res.status(200).json(items);
    } catch (error) {
        console.error('Failed to fetch items:', error);
        res.status(500).json({error: 'Failed to fetch item'});
    }
})

router.post('/', (req, res) => {
    console.log(req.body);
    productInfo.create(req.body)
        .then((item) => res.json({msg: 'Item added successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this item'}));
    }); 
/*    try {
        const {name, position, stats, image} = req.body;

        const newItem = new Item({
            name,
            stats,
            position,
            image
        });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch(error) {
        console.error('Failed to add item:', error);
        res.status(500).json({error: 'Failed to add item'});
    } */


router.put('/:id', (req, res) => {
    productInfo.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({msg: 'Updated Successfully'}))
        .catch((err) =>
        res.status(400).json({error: 'Unable to update the Database'})
        );
});

router.delete('/:id', (req, res) => {
    productInfo.findByIdAndRemove(req.params.id, req.body)
        .then((item) => res.json({mgs: 'Item entry deleted successfully'}))
        .catch((err) => res.status(404).json({error: 'No such item'}));
});

router.post('/signup', async (req, res) => {
    try {
      const { email, password, confirmPassword } = req.body;
  
      // Check if email already exists
      const user = await UserCredInfo.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Check if passwords match
      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }
  
      // Hash password
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create new user
      const newUser = new UserCredInfo({
        email,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();
  
      res.status(201).json({ message: 'User created', user: savedUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
    
  module.exports = router;