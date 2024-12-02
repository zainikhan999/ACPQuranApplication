
const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const User = require('./Model/User');  // Import User model
const Admin = require('./Model/Admin');  // Import Admin model
const Payment = require('./Model/Payment');  // Import the Payment model

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Configuration
const MONGO_URI = 'mongodb+srv://QuranApp:EOqMP8cpjuWKdzEx@cluster0.reske.mongodb.net/QuranApp?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB using Mongoose');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if connection fails
  });


app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    console.log(`Login attempt for username: ${username}`);

    try {
        // Check if the user is an admin (this could be based on a special admin username)
        // You could check a hardcoded admin username or email here
        if (username === 'adminUser') {  // Replace 'adminUser' with your actual admin username
            // If admin username is entered, do a check
            console.log('Admin login attempt');

            // You can manually check the password for admins or use a hash comparison if required
            // Assuming you store a simple password for admins, or you can add a hashed password check
            if (password === 'adminPassword') {  // Replace with actual admin password logic
                console.log('Admin login successful');
                return res.status(200).json({ message: 'Admin login successful', userType: 'admin' });
            } else {
                console.log('Invalid admin password');
                return res.status(401).json({ message: 'Invalid username or password' });
            }
        }

        // If it's not the admin, check for a regular user using the User model
        const user = await User.findOne({ userName: username.toLowerCase() });

        if (user) {
            console.log('User found:', user);

            // Compare the entered password with the stored hashed password
            const passwordMatch = await bcrypt.compare(password, user.password);
            console.log('Password match:', passwordMatch);

            if (passwordMatch) {
                console.log('User login successful');
                return res.status(200).json({ message: 'User login successful', userType: 'user' });
            } else {
                console.log('Invalid password');
                return res.status(401).json({ message: 'Invalid username or password' });
            }
        }

        // If the user is not found
        console.log('User not found');
        return res.status(401).json({ message: 'Invalid username or password' });

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Route to handle signup
app.post('/signup', async (req, res) => {
    let { userName, firstName, lastName, email, password, contact } = req.body;

    if (!userName || !firstName || !lastName || !email || !password || !contact) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const lowerCaseUserName = userName.toLowerCase();
    const lowerCaseEmail = email.toLowerCase();

    try {
        const existingUser = await User.findOne({
            $or: [{ userName: lowerCaseUserName }, { email: lowerCaseEmail }],
        });

        if (existingUser) {
            const conflictField = existingUser.userName === lowerCaseUserName ? 'Username' : 'Email';
            return res.status(400).json({ message: `${conflictField} already exists` });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userName: lowerCaseUserName,
            firstName,
            lastName,
            email: lowerCaseEmail,
            password: hashedPassword,
            contact,
        });

        const result = await newUser.save();
        res.status(201).json({ message: "User registered successfully", userId: result._id });
    } catch (error) {
        console.error('Error saving user data:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Route to get user profile details
app.get('/users', async (req, res) => {
    const { userName } = req.query;

    if (!userName) {
        return res.status(400).json({ message: 'Username is required' });
    }

    try {
        const user = await User.findOne({ userName: userName.toLowerCase() });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { firstName, lastName, email, contact } = user;
        res.status(200).json({ firstName, lastName, email, contact });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to register payment
app.post('/register-payment', async (req, res) => {
    const { username, courseName, coursePrice, creditCardNumber } = req.body;

    if (!username || !courseName || !coursePrice || !creditCardNumber) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newPayment = new Payment({
            username,
            courseName,
            coursePrice,
            creditCardNumber,
        });

        const result = await newPayment.save();
        return res.status(201).json({
            message: 'Payment successfully registered',
            paymentId: result._id,
        });
    } catch (error) {
        console.error('Error registering payment:', error);
        return res.status(500).json({ message: 'Error registering payment' });
    }
});

// Route to get payments made by a user
app.get('/payments/:username', async (req, res) => {
    const { username } = req.params;

    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    try {
        const payments = await Payment.find({ username });

        if (!payments.length) {
            return res.status(404).json({ message: 'No payments found for this user' });
        }

        return res.status(200).json(payments);
    } catch (error) {
        console.error('Error fetching payments:', error);
        return res.status(500).json({ message: 'Error fetching payments' });
    }
});
// Start server
app.listen(3001, () => {
    console.log("Backend server running on port 3001");
});
