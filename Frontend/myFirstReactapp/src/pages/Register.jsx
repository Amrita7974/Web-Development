import { use, useState } from "react";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [confirmpassword, setConfirmPassword] = useState("");


  const handleSubmit = (e) => {
 e.preventDefault();

    console.log("fullName :", fullName);
    console.log("email :", email);
    console.log("password :", password);
    console.log("confirmpassword :", confirmpassword);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Welcome Back!!!</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Fullname</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <br />

            <form onSubmit={handleSubmit}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setFullName(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <label htmlFor="confirm password">Confirm Password</label>
            <input
              type="text"
              name="confirm password"
              className="form-control"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <br />

            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
