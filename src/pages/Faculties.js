import Header from "../components/Header";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useState } from "react";

function Faculties() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoggedIn, addAuthData } = useAuth();
  const [registerMessage, setRegisterMessage] = useState(undefined);

  if (isLoggedIn)
    return (
      <>
        <Header />
        <p style={{ color: "green" }}>You are logged in!</p>
      </>
    );

  const facultyRegister = async (obj) => {
    const { data } = await axios.post(
      "http://localhost:8080/api/v1/faculties/register",
      obj
    );
    if (!data.success) {
      // handle
      setRegisterMessage(data.message);
      return;
    }
    addAuthData({
      email: obj.email,
      token: data.token,
      type: "faculties",
    });
  };

  return (
    <>
      <Header />

      <div class="wrap">
        <div class="image-slider">
          <ul class="rslides" id="slider1">
            <li>
              <img src="images/slide2.jpg" alt="" />
            </li>
          </ul>
        </div>

        <div class="content">
          <div class="section group">
            <div className="row">
              <div className="col-md-6 reg">
                <form
                  onSubmit={handleSubmit(facultyRegister)}
                  className="form-container"
                >
                  <p>Name:</p>
                  <input
                    {...register("fname", { required: true })}
                    type="text"
                    placeholder="Enter your full name"
                    className="form-control"
                  />
                  <p>Email:</p>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    placeholder="Enter your email id"
                    className="form-control"
                  />
                  <p>Contact No:</p>
                  <input
                    {...register("phoneNumber", { required: true })}
                    type="number"
                    placeholder="Enter a valid contact no"
                    className="form-control"
                  />
                  <p class="gender">Select Your Gender</p>
                  <select
                    {...register("gender", { required: true })}
                    name="gender"
                    className="form-control"
                  >
                    <option value="" selected>
                      -Gender-
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                  <p>Select Your Department</p>
                  <select
                    {...register("department", { required: true })}
                    name="department"
                    className="form-control"
                  >
                    <option value="none" selected>
                      -Department-
                    </option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Civil">Civil</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Hotel Management">Hotel Management</option>
                    <option value="Others">Others</option>
                  </select>
                  <label>Password :</label>
                  <br />
                  <input
                    type="password"
                    {...register("password", { required: true })}
                  />
                  <br />
                  <p style={{ color: "red" }}>{registerMessage}</p>
                  <br />

                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="clear"></div>
      </div>
      <footer>
        <div class="foot">
          <div class="footer-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              nihil.
            </p>
          </div>
          <div class="footer-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              nihil.
            </p>
          </div>
          <div class="footer-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              nihil.
            </p>
          </div>
          <div class="footer-content">
            <img src="images/eiem.png" alt="logo" class="footer-logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              nihil.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Faculties;
