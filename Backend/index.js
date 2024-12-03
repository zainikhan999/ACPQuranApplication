
const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const User = require('./Model/User');  // Import User model
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
        if (username === 'laiba001') {  // Replace 'adminUser' with your actual admin username
            // If admin username is entered, do a check
            console.log('Admin login attempt');

    
            if (password === '1234') {  
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
//------------------------------------------------------------------------------------------------------
//------------------------------------ADMIN PART--------------------------------------------------------
//------------------------------------------------------------------------------------------------------
// User schema
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     contact: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
// });

// const User = mongoose.model('User', userSchema);

// Payment schema
// const paymentSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
//     courseName: { type: String },
//     coursePrice: { type: Number },
//     creditCardNumber: { type: String },
//     createdAt: { type: Date, default: Date.now },
// });

// const Payment = mongoose.model('Payment', paymentSchema); // Payments collection

// Contact schema
const contactSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema); // Contacts collection

// Add contact message endpoint
app.post('/add-contact', async (req, res) => {
    const { studentName, email, message } = req.body;

    if (!studentName || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newContact = new Contact({
            studentName,
            email,
            message,
        });

        await newContact.save();
        res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Fetch all contact messages endpoint
app.get('/get-contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 }); // Fetch all messages
        res.json(contacts);
    } catch (error) {
        console.error('Error fetching contact messages:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add student endpoint
app.post('/add-student', async (req, res) => {
    const { username, firstName, lastName, email, password, contact } = req.body;

    if (!username || !firstName || !lastName || !email || !password || !contact) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const lowerCaseUsername = username.toLowerCase();
    const lowerCaseEmail = email.toLowerCase();

    try {
        const existingUser = await User.findOne({
            $or: [{ username: lowerCaseUsername }, { email: lowerCaseEmail }],
        });

        if (existingUser) {
            const conflictField = existingUser.username === lowerCaseUsername ? 'Username' : 'Email';
            return res.status(400).json({ message: `${conflictField} already exists` });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: lowerCaseUsername,
            firstName,
            lastName,
            email: lowerCaseEmail,
            password: hashedPassword,
            contact,
        });

        const result = await newUser.save();
        res.status(201).json({ message: "User registered successfully", userId: result._id });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

// Fetch all users endpoint (only relevant fields)
app.get('/get-students', async (req, res) => {
    try {
        const students = await User.find({}, 'firstName lastName email contact'); // Only fetch relevant fields
        res.json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Fetch student by email (excluding username and password)
app.get('/get-student/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const student = await User.findOne({ email }, 'firstName lastName email contact'); // Only fetch relevant fields
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student); // Return relevant fields
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update student endpoint (by email)
app.put('/update-student/:email', async (req, res) => {
    const { email } = req.params;
    const { firstName, lastName, contact } = req.body; // Update only relevant fields

    try {
        const updatedStudent = await User.findOneAndUpdate(
            { email },
            { firstName, lastName, contact },
            { new: true, fields: 'firstName lastName email contact' } // Return updated fields
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ message: 'Student updated successfully', student: updatedStudent });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete student endpoint (by email)
app.delete('/delete-student/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const result = await User.deleteOne({ email });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Start server
app.listen(3001, () => {
    console.log("Backend server running on port 3001");
});


