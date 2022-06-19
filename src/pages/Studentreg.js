import Header from "../components/Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

function Studentreg() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoggedIn, addAuthData } = useAuth();
  const [registerMessage, setRegisterMessage] = useState(undefined);

  const studentRegister = async (obj) => {
    const { data } = await axios.post(
      "http://localhost:8080/api/v1/students/register",
      obj
    );
    if (data.success)
      addAuthData({ email: obj.email, token: data.token, type: "students" });
    else setRegisterMessage(data.message);
  };

  if (isLoggedIn) {
    return (
      <>
        <Header />
        <p>You are already logged in!</p>
      </>
    );
  }

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
                <hr></hr>
                <h1>Personal Details</h1>
                <hr></hr>
                <form
                  onSubmit={handleSubmit(studentRegister)}
                  action=""
                  class="form-container"
                >
                  <p>Student Name</p>
                  <input
                    type="text"
                    {...register("fname", { required: "Name is required" })}
                    placeholder="First Name"
                    className="form-control"
                  />

                  <p>Father's Name</p>
                  <input
                    {...register("fathersName")}
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />

                  <p>Email Address</p>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                  <p>Contact No</p>
                  <input
                    {...register("phoneNumber", { required: true })}
                    type="number"
                    placeholder="Enter Valid Phone no "
                    className="form-control"
                  />

                  <p>Date Of Birthday</p>
                  <input
                    {...register("dateOfBirth", { required: true })}
                    type="date"
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
                  <br></br>
                  <p>Select Your Department</p>
                  <select
                    {...register("department", { required: true })}
                    name="department"
                    className="form-control"
                  >
                    <option value="" selected>
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
                  <br></br>
                  <p for="address">Current Address</p>
                  <input
                    {...register("address")}
                    type="text"
                    placeholder="Enter your full address"
                    className="form-control"
                  />
                  <br></br>
                  <p>Education Qualification</p>
                  <select
                    {...register("qualification")}
                    className="form-control"
                  >
                    <option value="" selected>
                      -Qualification-
                    </option>
                    <option value="Higher Secondary">Higher Secondary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="ITI">ITI</option>
                    <option value="Vocational">Vocational</option>
                    <option value="B.A">B.A</option>
                    <option value="M.A">M.A</option>s
                    <option value="Others">Others</option>
                  </select>

                  <hr></hr>
                  <h1>Domain Of Job</h1>

                  <hr></hr>
                  <p>You Want to get a job: </p>
                  <select {...register("jobDesired")} className="form-control">
                    <option value="" selected>
                      -Select here-
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>

                  <p>Category of Job:</p>
                  <select {...register("jobCategory")} className="form-control">
                    <option value="" selected>
                      -Select here-
                    </option>
                    <option value="Sofware Jobs">Sofware Jobs</option>
                    <option value="Technical Architect">
                      Technical Architect
                    </option>
                    <option value="Data Architect">Data Architect</option>
                    <option value="Solution Architect">
                      Solution Architect
                    </option>
                  </select>

                  <p>Fresher:</p>
                  <select
                    {...register("fresherStatus")}
                    className="form-control"
                  >
                    <option value="" selected>
                      -Select here-
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>

                  <p>Experience :</p>
                  <textarea
                    {...register("experience")}
                    cols="50"
                    rows="6"
                    width=""
                    placeholder="Do you have any experience?"
                    className="form-control"
                  ></textarea>

                  <label>Password : </label>
                  <br />
                  <input
                    type="password"
                    {...register("password", { required: true, minLength: 8 })}
                  />

                  <br />
                  <p style={{ color: "red" }}>{registerMessage}</p>
                  <br />
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Register
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

export default Studentreg;
