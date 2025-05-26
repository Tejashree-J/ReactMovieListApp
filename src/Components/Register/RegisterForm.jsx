import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Register/RegisterPage.css";
import image1Home from "../../assets/image1Home.png";

function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateField = (fieldName, formValues) => {
    if (formValues.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`,
      }));
      return true;
    } else {
      setErrors((prev) => ({ ...prev, [fieldName]: null }));
      return false;
    }
  };

  const handleSubmit = () => {
    let isErrors = false;

    isErrors = validateField("name", formValues.name) || isErrors;
    isErrors = validateField("username", formValues.username) || isErrors;
    isErrors = validateField("email", formValues.email) || isErrors;
    isErrors = validateField("mobile", formValues.mobile) || isErrors;

    if (formValues.checkbox === false) {
      setErrors((prev) => ({
        ...prev,
        checkbox: "Please accept above condition",
      }));
      isErrors = true;
    } else {
      setErrors((prev) => ({ ...prev, checkbox: null }));
    }

    if (!isErrors) {
      localStorage.setItem("userInfo", JSON.stringify(formValues));
      navigate("/movies");
    }
  };

  return (
    <div className="container" id="homePage">
      <div className="left-content">
        <img src={image1Home} alt="Home page " />
        <h2>
          Discover new things on <br />
          Superapp
        </h2>
      </div>
      <div className="right-content">
        <form id="signUp">
          <header className="appTitle">Super app</header>
          <p>Create your new account</p>
          <input
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
            name="name"
          />
          {errors.name && <h6>{errors.name}</h6>}

          <input
            type="text"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            name="username"
          />
          {errors.username && <h6>{errors.username}</h6>}
          <input
            type="email"
            placeholder="Email Address"
            value={formValues.email}
            onChange={handleChange}
            name="email"
          />
          {errors.email && <h6>{errors.email}</h6>}

          <input
            type="text"
            placeholder="Mobile"
            value={formValues.mobile}
            onChange={handleChange}
            name="mobile"
          />
          {errors.mobile && <h6>{errors.mobile}</h6>}
        </form>
        <div className="checkbox">
          <input
            type="checkbox"
            name="checkbox"
            value={formValues.checkbox}
            id="checkbox"
            onChange={handleChange}
          />
          <p>Share my registration data with Superapp</p> <br />
        </div>
        {errors.checkbox && (
          <h6 style={{ marginLeft: "37%" }}>{errors.checkbox}</h6>
        )}

        <button type="submit" onClick={handleSubmit}>
          {" "}
          SIGN UP
        </button>
        <p className="terms">
          By clicking on Sign up. you agree to Superapp{" "}
          <span>Terms and Conditions of Use </span> <br />
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
