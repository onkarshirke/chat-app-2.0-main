import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "ananya.sharma@example.com",
    fullName: "Ananya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    email: "priya.kumar@example.com",
    fullName: "Priya Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    email: "isha.patel@example.com",
    fullName: "Isha Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    email: "neha.reddy@example.com",
    fullName: "Neha Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    email: "sakshi.jain@example.com",
    fullName: "Sakshi Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    email: "divya.menon@example.com",
    fullName: "Divya Menon",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    email: "radhika.singh@example.com",
    fullName: "Radhika Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    email: "meera.gupta@example.com",
    fullName: "Meera Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/72.jpg",
  },

  // Male Users
  {
    email: "arjun.patel@example.com",
    fullName: "Arjun Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    email: "rahul.sharma@example.com",
    fullName: "Rahul Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    email: "vikram.singh@example.com",
    fullName: "Vikram Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    email: "siddharth.jain@example.com",
    fullName: "Siddharth Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    email: "anil.kumar@example.com",
    fullName: "Anil Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/69.jpg",
  },
  {
    email: "rahul.menon@example.com",
    fullName: "Rahul Menon",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    email: "deepak.patel@example.com",
    fullName: "Deepak Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
