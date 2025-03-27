const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const authRoutes = require('./routes/auth');
const examRoutes = require('./routes/exams');

app.use('/api', authRoutes);
app.use('/api', examRoutes);

// User registration
app.post('/register', (req, res) => {
  const { fullName, username, password, userType } = req.body;
  // Logic to save user to DB
});

// User login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Logic to validate user
});

// Create Exam (Teacher only)
app.post('/create-exam', (req, res) => {
  const { title, date, duration, questions } = req.body;
  // Save to exams collection
});

// View Available Exams (for Students)
app.get('/exams', (req, res) => {
  // Fetch list of exams
});

// Submit Exam (Student)
app.post('/submit-exam', (req, res) => {
  const { username, examId, answers } = req.body;
  // Save results
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  'mongodb+srv://satatharva:masha009@cluster0.y51oa.mongodb.net/examPortal?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("✅ MongoDB Atlas connected successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));
// Root Route
app.get("/", (req, res) => {
  res.send("✅ Backend is working perfectly!");
});

// Start Server
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});