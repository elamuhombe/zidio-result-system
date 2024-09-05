import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs"; // bcryptjs spelling is correct now
import { User, IUser } from "../models/index";

// Middleware for creating or updating a user (minimal logic, as per preference)
const validateUser = (req: Request, res: Response, next: NextFunction) => {
    next();
};

const createUser = async (req: Request, res: Response) => {
    try {
        // Extract user data from the request body
        const { firstName, lastName, email, password, role } = req.body;

        // Validate required fields
        if (!email || !password || !firstName || !lastName || !role) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Create a new user
        const user = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,  // Store hashed password
            role
        });

        // Save the user to the database
        const savedUser = await user.save();
        console.log({ savedUser });

        if (!savedUser) throw new Error("Error occurred while creating user");

        res.status(201).json({ savedUser, success: true });
    } catch (error: any) {
        console.log({ userError: error.message });
        res.status(400).send(error.message);
    }
};

export { validateUser, createUser };
