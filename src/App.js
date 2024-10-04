import React , { useState } from "react";
import "./App.css";

const App=()=>{
    const[formData,setformData]=useState({
        email:'',
        password:''
    });

    const[error,seterror]=useState({});
    const[IsSubmiited,setIsSubmitted]=useState(false);

      const validate = () => {
        const newErrors = {};

        if (!formData.email) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid";
        }

        if (!formData.password) {
          newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters long";
        }

        return newErrors;
      };

         const handleChange = (e) => {
           // Do not update form data until "Enter" is pressed
           const { name, value } = e.target;
           setformData({
             ...formData,
             [name]: value,
           });
         };

      const handleSubmit=(e)=>{
        const validateErrors=validate();
        seterror(validateErrors);
        if(Object.keys(validateErrors).length===0){
            setIsSubmitted(true);
        }
      };

    return (
      <div className="Form">
        <h2> Sign In</h2>
        {IsSubmiited ? (
          <div className="success-message">Form Submitted Successfully!!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="Email">
              <label> Email: </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            </div>
            <div className="Password">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
};

export default App;