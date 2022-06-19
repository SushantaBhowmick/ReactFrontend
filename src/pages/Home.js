import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <section class="firstsection background" id="firstsection">
        <div class="boxmain">
          <div class="firsthalf">
            <p class="textbig">Lorem ipsum dolor sit amet.</p>
            <p class="textsmall">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ex accusamus quas rerum, excepturi molestiae!
            </p>
            <div class="links">
              <Link className="hyperlink" to="/student-reg">
                Student
              </Link>
              <Link className="hyperlink" to="/faculties">
                faculties{" "}
              </Link>
            </div>
          </div>
          <div class="secondhalf">
            <img src="images/icon3.jpg" alt="" />
          </div>
        </div>
      </section>
      <div id="about">
        <section class="secondsection">
          <div class="text">
            <p class="textbig">Introduction</p>
            <p class="textsmall">
              AddressBook@ is an Web based Application which contains both
              students and faculties information or a database used for storing
              entries called contacts. Each contact entry usually consists of a
              few standard fields. First off all you need to register of this
              after that you find anyone information, and also be a security
              maintain possible here.{" "}
            </p>
          </div>
          <div class="thumbnail">
            <img src="images/003.jpg" alt="this is a image" />
          </div>
        </section>
        <section class="secondsection left">
          <div class="text">
            <p class="textbig">Project</p>
            <p class="textsmall">
              AddressBook@ is a Software application to maintain not only
              address it's maintain any kind of college related or your career
              related information. This project main three component to search
              address one is category, Group and Category of jobs. Like if you
              are fresher or not, or you are waiting for a job or not.
            </p>
          </div>
          <div class="thumbnail">
            <img src="images/004.jpg" alt="this is a image" />
          </div>
        </section>
        <section class="secondsection">
          <div class="text">
            <p class="textbig">Scope and Objects</p>
            <p class="textsmall">
              This application is built such away that it should suits for all
              type of AddressBook@ in future. So every effort is takes to
              implement this project in all type of users. Recording the
              information and searching made very simple in this project.
            </p>
            <p class="textsmall">
              The main objective of this application is to automate the complete
              operation of the information. They need maintain hundreds of
              thousands of record. Also searching be very faster so they can
              find required details instantly.
            </p>
          </div>
          <div class="thumbnail">
            <img src="images/006.jpg" alt="this is a image" />
          </div>
        </section>
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

export default Home;
