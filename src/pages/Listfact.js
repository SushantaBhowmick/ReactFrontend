import { useEffect, useState } from "react";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Listfact() {
  let [lstd, setlstd] = useState([]);

  const { search } = useLocation();

  const [, , searchTerm] = /(^\?search=([^&]+))?/.exec(search);

  const { token, email, type, isLoggedIn, removeAuthData } = useAuth();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/faculties/list" + search,
        {
          headers: { email, token },
        }
      );

      if (!data.success) {
        console.log("data", data);
        if (data.message === "User is not logged in") removeAuthData();
        // TODO: do something
        return;
      }

      setlstd(data.faculties);
    })().catch(console.error);
  }, [search]);

  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <p style={{ color: "red" }}>You are not logged in, please log in!</p>
      </>
    );
  }

  if (type !== "faculties") {
    return (
      <>
        <Header />
        <p style={{ color: "red" }}>
          You are not authorized to view this page (type: {type})
        </p>
      </>
    );
  }

  return (
    <>
      <Header showSearch={true} />

      <div class="wrap">
        <div class="table">
          <div class="section group">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-bordered table-responsive-sm">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Department</th>
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
                        <td>{s.email}</td>
                        <td>{s.phoneNumber}</td>
                        <td>{s.gender}</td>
                        <td>{s.department}</td>
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

export default Listfact;
