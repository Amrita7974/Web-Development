import User from "../models/usermodel.js";
export const RegisterUser = async(req, res) => {
  try{
    const{ fullName,email,phone,dob,gender,password} = req.body;
    if(!fullName|| !email || !password || !gender || !dob || !phone){
    res.status(400).json({ message: "All feilds Required"});
    return;
    }
  
    const existingUser = await User.findOne({ email });
    if(existingUser){
      res.status(409).json({ message: "Email Already Registerd"});
      return;
    }


  } catch (error){ 

  }
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login Successfull from Controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};

