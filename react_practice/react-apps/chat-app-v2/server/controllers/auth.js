const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => { 
    try {
      const { fullName, username, password, phoneNumber } = req.body // the req body sent
      
      const userId = crypto.randomBytes(16).toString('hex'); // creating a hex encrypt password

      const serverClient = connect(api_key, api_secret, app_id); // connecting server-client using our apps info

      const hashedPassword = await bcrypt.hash(password, 10); // setting the users password as a hash password, takes user password/level of security as params
      
      const token = serverClient.createUserToken(userId); // setting the userToken as the userID

      res.status(200).json({ token, fullName, username, userId, hashedPassword, phoneNumber }); // all is well

    } catch (error) {
      console.log(error)
      
      res.status(500).json({message: error})
    }
}
const login = async () => {
  try {
    const { username, password } = req.body; 

    const serverClient = connect(api_key, api_secret, app_id);

    const client = StreamChat.getInstance(api_key, api_secret)

    const { users } = await client.queryUsers({ name: username }); // compare username to see if it exists in our db

    if (!users.length) return res.status(400).json({ message: 'User not found' });  // if it does not match, return error message
    
    const success = await bcrypt.compare(password, users[0].hashedPassword); // if user exists in db, compare password to db password for user

    const token = serverClient.createUserToken(users[0].id);

    if (success) {
      res.status(200).json({ token, fullName: users[0].fullName, username, userId: users[0].id });
    } else {
      res.status(200).json({ message: "Incorrect password" });
    }
      } catch (error) {
        console.log(error)
        
        res.status(500).json({message: error})
      }
 }

module.exports = {signup, login}