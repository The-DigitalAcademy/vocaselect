//importing modules
const bcrypt = require("bcryptjs");
const db = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// Assigning users to the variable User
const User = db.User;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
  try {
    console.log("Hi-1");
    const { name, surname, email, dob, city, studentgrade, password } =
      req.body.users;

    console.log(
      req.body.users,
      " json body ",
      name,
      surname,
      email,
      dob,
      city,
      studentgrade,
      password
    );

   const data = {
    name,
    surname,
    email,
    dob,
    city,
    studentgrade,
    password: await bcrypt.hash(password, 10),
   };
   //saving the user
   const user = await db.User.create(data);

   //if user details is captured
   //generate token with the user's id and the secretKey in the env file
   // set cookie with the token generated
   if (user) {
     let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d', // 1 day (24 hours)
     });

     res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
     console.log("user", JSON.stringify(user, null, 2));
     console.log(token);
     //send users details
    //  return res.status(201).send(user);
     return res.status(201).send({message: "User was registered successfully!"} );

   } else {
     return res.status(409).send("Details are not correct");
   }
 } catch (error) {
   console.log(error);
   return res.status(409).send(error);
 }
};

const emailExists = async (req, res) => {
  try {
    console.log("Hi-1");
    const  email  = req.params.email;

    console.log(email, " json body ", email);

   
    console.log("Hi-2");

    // Check if the "email" field exists and is not empty or undefined
    if (!email) {
      return res.status(400).send("Email is required.");
    }

    //Check if the user with the same email already exists
    const existingUser = await db.User.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(200).send(true);
    }

    return res.status(200).send(false);
    
  } catch (error) {
    console.log(error);
    return res.status(409).send(error);
  }
};

//login authentication
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body, "login body", username, password);
    //find a user by their email
    const user = await db.User.findOne({
      where: {
        email: username, //////
      },
    });

    //if user email is found, compare password with bcrypt
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      //if password is the same
      //generate token with the user's id and the secretKey in the env file

      if (isSame) {
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1d", // 1 day (24 hours)
        });

        //if password matches wit the one in the database
        //go ahead and generate a cookie for the user
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
        var userInfo = {
          id: user.id,
          name: user.name,
          surname: user.surname,
          email: user.email,
          dob: user.dob,
          city: user.city,
          grade: user.studentgrade
        }
        //send user data
        return res.status(201).send({ message: "Successfully logged in!", token: token,user:userInfo  });
      } else {
        return res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

//GET ALL
const getUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    // Return the list of users
    // res.send({ message: "Users successfully retrieved!" });
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

//GET BY ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, surname, email, dob, city, studentgrade } = req.body;
    const data = {
      name,
      surname,
      email,
      dob,
      city,
      studentgrade,
    };
    const user = await User.findByPk(userId);
    if (user) {
      await User.update(data, {
        where: { id: userId },
      });
      // Fetch the updated user to return it
      const updatedUser = await User.findByPk(userId);
      return res.status(200).send(updatedUser);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

//delete users
// DELETE BY ID
const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Perform the delete operation here
    await user.destroy();

    return res.status(200).send("User deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const generateOTP = () => {
  // Logic to generate OTP (e.g., using a library)
 // return Math.floor(1000 + Math.random() * 9000).toString();
  const generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  console.log('Generated OTP:', generatedOTP);
  return generatedOTP;
};

const sendResetOTP = async (req, res) => {
  const { email, link } = req.body;

  try {
    const user = await db.User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // const generatedOTP = generateOTP();
    // Generate OTP
    const otpGenerated = generateOTP();
     // Set the OTP value using otpManager
   otpManager.setOTP(otpGenerated);

    //this.otpGenerated =  otpGenerated;
    console.log(otpGenerated ,'generated pin');
    console.log('Stored OTP:', otpManager.getOTP());
    // Store the OTP in the database or cache
    // For simplicity, let's assume you have a 'otp' field in the User model
   await user.update({ otp: otpGenerated });

   //Send OTP to the user's email
    // const transporter = nodemailer.createTransport({
    //   service: 'Gmail', // Change to your email service
    //   auth: {
    //     user: 'vocaselect@gmail.com',
    //     pass: 'beqedpjvbnxnnanl',
    //   },
    // });

    // const mailOptions = {
    //   from: 'vocaselect@gmail.com',
    //   to: options.to,
    //   subject: options.subject,
    //   html : htmlToSend
    // //  text: `Your OTP: ${otpGenerated}, click on reset password to reset your password <a href="${link}">Reset Password</a>`,
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error('Error sending email:', error);
    //     res.status(500).json({ message: 'Error sending OTP email' });
    //   } else {
    //     console.log('OTP email sent:', info.response);
    //     res.status(200).json({ message: 'OTP sent successfully' });
    //   }
    // });

    const data = {
      otpGenerated:otpGenerated,
      link:link
    };

    sendEmail({ to: user.email, subject: "Password Reset Request", name: user.name, data: data, templatePath: "./utils/email/templates/requestPasswordReset.html" });

  res.status(200).json({ message: 'OTP sent successfully ' + otpGenerated });
   } catch (error) {
   console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Internal server error' });
   }
};


const resetPassword = async (req, res) => {
  const { otp, password, email } = req.body;

  try {
    const user = await db.User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: 'Invalid user' });
    }

    // Uncomment the OTP verification if condition
    console.log('Entered OTP:', otp);
    console.log('Stored OTP:', otpManager.getOTP());

    if (otp.toString() !== otpManager.getOTP().toString()) {
      console.log('OTP mismatch');
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Assuming you have access to the 'user' instance
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.update({ password: hashedPassword }, { where: { email } });
    console.log('Password reset for:', user.email);

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  signup,
  login,
  emailExists,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  sendResetOTP, 
  resetPassword 
};