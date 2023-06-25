import User from "../model/user.js";
import bcrypt from "bcrypt";
import dotenv  from 'dotenv';
import Token from "../model/token.js";
import jwt from 'jsonwebtoken';

dotenv.config();

export const signupUser = async(request,response) => {
    try {
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(request.body.password, salt);
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const user = { username: request.body.username, name: request.body.name, password: hashedPassword }

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successfull' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}

export const loginUser = async (request, response) => {
    try {
      // Input validation
      if (!request.body.username || !request.body.password) {
        return response.status(400).json({ message: 'Missing username or password' });
      }
  
      let user = await User.findOne({ username: request.body.username });
      if (!user) {
        return response.status(400).json({ message: 'Invalid username or password combination' });
      }
  
      let match = await bcrypt.compare(request.body.password, user.password);
      if (match) {
        const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '45m' });
        const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
  
        // Store refresh token
        const newToken = new Token({ token: refreshToken, userId: user._id });
        await newToken.save();
  
        // Return response with tokens and user information
        response.status(200).json({ accessToken:accessToken, refreshToken:refreshToken, name: user.name, username: user.username });
  
      } else {
        response.status(400).json({ message: 'Invalid username or password combination' });
      }
    } catch (error) {
      response.status(500).json({ message: `Error while logging in the user: ${error.message}` });
    }
};
  