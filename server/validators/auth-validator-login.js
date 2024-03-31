const { z } = require("zod");

// Define login schema
const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"})
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    password: z.string({
        required_error: "Password is required"})
        .trim()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(1024, { message: "Password can't be greater than 1024 characters" })
});

module.exports = loginSchema;
