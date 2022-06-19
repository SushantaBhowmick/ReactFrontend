import { useEffect, useState } from "react";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Liststd() {
  let [lstd, setlstd] = useState([]);

  const { search } = useLocation();

  const [, , searchTerm] = /(^\?search=([^&]+))?/.exec(search);

  const { isLoggedIn, email, token, removeAuthData } = useAuth();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/students/list" + search,
        { headers: { email, token } }
      );
      if (!data.success) {
        if (data.message === "User is not logged in") removeAuthData();
        return;
      }
      setlstd(data.students);
    })().catch(console.error);
  }, [search]);

  if (!isLoggedIn)
    return (
      <>
        <Header />
        <p style={{ color: "red" }}>
          You are not logged in, please log in to continue
        </p>
      </>
    );

  return (
    <>
      <Header showSearch={true} />
      <div class="">
        <div class="">
          <div class="section group">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-bordered table-responsive">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Father's name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Dob</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Department</th>
                      <th scope="col">Address</th>
                      <th scope="col">E_qualification</th>
                      <th scope="col">Job</th>
                      <th scope="col">Freshers</th>
                      <th scope="col">Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lstd.map((s) => (
                      <tr key={s._id} className="table-primary">
                        {searchTerm ? (
                          <td
                            dangerouslySetInnerHTML={{
                              __html: s.fname.replace(
                                new RegExp(searchTerm, "i"),
                                `<mark>${searchTerm}</mark>`
                              ),
                            }}
                          ></td>
                        ) : (
                          <td>{s.fname}</td>
                        )}
                        <td>{s.fathersName}</td>
                        <td>{s.email}</td>
                        <td>{s.phoneNumber}</td>
                        <td>{s.dateOfBirth}</td>
                        <td>{s.gender}</td>
                        <td>{s.department}</td>
                        <td>{s.address}</td>
                        <td>{s.qualification}</td>
                        <td>{s.jobDesired}</td>
                        <td>{s.fresherStatus}</td>
                        <td>{s.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default Liststd;
