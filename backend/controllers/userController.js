const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registration controller
exports.registerUser = async (req, res) => {
    try {
      // Validate and save user data to the database
      const { firstName, lastName, gender, dob, city, zip, country, state, interests, profilePicture, password } = req.body;
      // Validate required fields
      if (!firstName || !lastName || !gender || !dob || !city || !zip || !country || !state || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      // Hash the password before saving to the database
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        firstName,
        lastName,
        gender,
        dob,
        city,
        zip,
        country,
        state,
        interests,
        profilePicture,
        password: hashedPassword,
      });
      await user.save();
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Login controller
  exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Incorrect email and password' });
      }
      // Generate a JWT token for authentication
      const token = jwt.sign({ userId: user._id }, 'secretKey');
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Fetch all users
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Fetch a user by ID
  exports.getUserById = async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Update user details
  exports.updateUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const updates = req.body;
      await User.findByIdAndUpdate(userId, updates);
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Delete user
  exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      await User.findByIdAndDelete(userId);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  