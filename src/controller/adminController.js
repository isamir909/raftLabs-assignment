const adminModel = require("../Models/adminModel");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    const findAdmin = await adminModel.findOne({ email: email });
    if (!findAdmin)return res.status(404).send({ status: false, message: "User not found" });

    let hash = findAdmin.password;
    let compare = bcrypt.compareSync(password, hash);
    if(!compare)return res.status(401).send({ status: false, msg: "Password Incorrect" });

    let token = jwt.sign(
      {
        id: findAdmin._id,
        iat: Math.floor(new Date().getTime() / 1000),
      },
      "RaftLabs!@#$%",
      { expiresIn: "3h" }
    );

    res.setHeader("jwt", token);
    return res.status(200).send({status: true,message: "User login successfully",data: { token: token }})
  } catch (error) {
    res.status(500).send({ status: false, error: error });
  }
};
const createAdmin = async (req, res) => {
  try {
    let data = req.body;
    //encrypting password
    const saltRounds = 10;
    const hash = bcrypt.hashSync(data.password, saltRounds);
    data.password = hash;

    let createAdmin = await adminModel.create(data);
    createAdmin = createAdmin.toObject();
    delete createAdmin.password;

    return res.status(201).send({status: true,message: "User created successfully",data: createAdmin})
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, error: error });
  }
};

module.exports = { createAdmin, login };
