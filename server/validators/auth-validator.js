const { z, email } = require("zod");

// Signup validation schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(255, { message: "Username must not exceed 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not exceed 255 characters" }),

  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .regex(/^[0-9]{10}$/, {
      message: "Phone number must be exactly 10 digits",
    }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(255, { message: "Password must not exceed 255 characters" }),
});


const loginSchema = z.object({
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({ message: "Invalid email address" }),

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(1,{message:"Password is required"})

})

module.exports ={ signupSchema, loginSchema};
