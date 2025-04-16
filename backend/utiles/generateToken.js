const jwt = require("jsonwebtoken");

const generateToken = (userId, res) => {
  console.log("hello0");
  const token = jwt.sign({ userId }, process.env.CLE_JWT, { expiresIn: "7d" });
  console.log("hello1");
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false, 
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  console.log("hello2");
  return token;
};
module.exports = generateToken;
