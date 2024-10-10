import { useEffect, useRef } from "react";
import styles from "../styles/home.module.css";
import { ReactTyped } from "react-typed";
import githubLogo from "../assets/github-brands-solid.svg";
import linkedIn from "../assets/linkedin-brands-solid.svg";
import educationLogo from "../assets/mortarboard.png";
import skillLogo from "../assets/expertise.png";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import emailLogo from "../assets/mail-inbox-app.png";
import phoneLogo from "../assets/phone-call.png";
import locationLogo from "../assets/location.png";
import experience from "../assets/quality.png";
import profile from "../assets/profile.jpg";
function App() {
  function toGithub() {
    window.location.replace("https://github.com/Frenkytay?tab=repositories");
  }
  // function toLinkedIn() {
  //   window.location.replace("https://www.linkedin.com/in/frenky-tay");
  // }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <nav className={styles.navbar}>
        <li>Frenky</li>
        <div className={styles.navbar_detail}>
          <li
            className={styles.navbar_child}
            onClick={() => scrollToSection("about-section")}
          >
            About
          </li>
          <li
            className={styles.navbar_child}
            onClick={() => scrollToSection("experience-section")}
          >
            Experience
          </li>
          <li
            className={styles.navbar_child}
            onClick={() => scrollToSection("project-section")}
          >
            Project
          </li>
          <li
            className={styles.navbar_child}
            onClick={() => scrollToSection("contact-section")}
          >
            Contacts
          </li>
        </div>
      </nav>

      <div className={styles.profile}>
        <div className={styles.profile_image}>
          <img src={profile} alt="profile" className={styles.picture} />
        </div>
        <div className={styles.profile_container}>
          <h5 className={styles.hello_text}>Hello, I’m</h5>
          <ReactTyped
            className={styles.name_text}
            strings={["Frenky", "a Developer", "a Programmer"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />

          <div>
            <a href="/Frenky_CV.pdf" download>
              <button className={styles.button_cv}>Download CV</button>
            </a>

            <button
              className={styles.button_contact}
              onClick={() => scrollToSection("contact-section")}
            >
              Contact
            </button>
          </div>
          <div>
            <a
              href="https://github.com/Frenkytay?tab=repositories"
              target="_blank"
            >
              <img src={githubLogo} alt="" className={styles.logo} />
            </a>

            <a href="https://www.linkedin.com/in/frenky-tay" target="_blank">
              <img src={linkedIn} alt="" className={styles.logo} />
            </a>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1440 320">
        <path
          fill="#333333"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,181.3C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div id="about-section">
        <h6 className={styles.about_text}>Get to Know More</h6>
        <h1 className={styles.aboutme_text}>About Me</h1>
      </div>

      <div className={styles.box_container}>
        <div className={styles.box_section_2}>
          <img src={educationLogo} alt="" className={styles.icon} />
          <h5>Education</h5>
          <p className={styles.skill_child}>
            Hi,I’m Frenky, an undergraduate student in Computer Science at BINUS
            University with a passion for building web and mobile applications.
            I love solving problems with code and am always eager to learn new
            technologies. I have experience leading volunteer projects and
            participating in various competitions, including national Mandarin
            competitions.
          </p>
        </div>
        <div className={styles.box_section_2}>
          <img src={skillLogo} alt="" className={styles.icon} />
          <h5>Technical Skill</h5>
          <h4>Technologies i work with:</h4>
          <div className={styles.skill_detail}>
            <ul>
              <h5>Frontend Development</h5>
              <li className={styles.skill_child}>Typescript</li>
              <li className={styles.skill_child}>HTML CSS</li>
              <li className={styles.skill_child}>Javascript</li>
              <li className={styles.skill_child}>React JS</li>
              <li className={styles.skill_child}>React Native</li>
            </ul>
            <hr />
            <ul>
              <h5>Backend Development</h5>
              <li className={styles.skill_child}>c# (.NET)</li>
              <li className={styles.skill_child}>Node JS</li>
              {/* <li className={styles.skill_child}>Java (OOP)</li> */}
              <li className={styles.skill_child}>MySQL</li>
            </ul>
            <hr />
            <ul>
              <h5>Other Skill</h5>

              <li className={styles.skill_child}>Problem Solving</li>
              <li className={styles.skill_child}>Strong Communication</li>
              <li className={styles.skill_child}>Team Collaboration</li>
            </ul>
          </div>
        </div>
        <div id="experience-section" className={styles.box_section_last}>
          <img src={experience} alt="" className={styles.icon} />
          <h5>Experience & Volunteer</h5>
          <div className={styles.skill_detail_last}>
            <div>
              <li className={styles.skill_child}>
                Committee Member – BINUS Festival (BIFEST)
              </li>
              <p className={styles.skill_child}>
                Participated as an organizer for the BINUS Festival, handling
                event management tasks and ensuring smooth operations during the
                event.
              </p>
            </div>
            <div>
              <li className={styles.skill_child}>
                Volunteer – Teach For Indonesia (TFI){" "}
              </li>
              <p className={styles.skill_child}>
                Engaged as a volunteer in various activities organized by Teach
                For Indonesia, contributing to community service and social
                initiatives.
              </p>
            </div>
            <div>
              <li className={styles.skill_child}>
                Event Organizer – BINUS Mandarin Club (BNMC)
              </li>
              <p className={styles.skill_child}>
                Responsible for organizing events within BNMC, including
                planning, coordination, and overseeing event execution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="project-section" className={styles.project_text}>
        <h1>My Recent Project</h1>
      </div>
      <div className={styles.box_container_project}>
        <div className={styles.box}>
          <a>
            <img className={styles.project_1} src={project1} alt="" />
          </a>
          <h5>Simple CURD using .NET</h5>
          <p className={styles.project_desc}>
            I am making a simple CRUD project using html css javascript and
            using .NET for the API
          </p>
          <button onClick={toGithub} className={styles.project_button}>
            <img src={githubLogo} className={styles.project_logo} alt="" />{" "}
            Github
          </button>
        </div>
        <div className={styles.box}>
          <a>
            <img className={styles.project_2} src={project2} alt="" />
          </a>
          <h5>Calculator</h5>
          <p className={styles.project_desc}>
            I am developed a fully functional calculator application using
            React.js. The app features a clean and intuitive interface with
            essential arithmetic functions, including addition, subtraction,
            multiplication, and division.
          </p>
          <button onClick={toGithub} className={styles.project_button}>
            <img src={githubLogo} className={styles.project_logo} alt="" />{" "}
            Github
          </button>
        </div>
        <div className={styles.box}>
          <a>
            <img className={styles.project_2} src={project3} alt="" />
          </a>
          <h5>Simple Shopping App</h5>
          <p className={styles.project_desc}>
            I am making a Shopping app using React Native where the user can add
            the item into cart and there is game to earn the coin
          </p>
          <button onClick={toGithub} className={styles.project_button}>
            <img src={githubLogo} className={styles.project_logo} alt="" />{" "}
            Github
          </button>
        </div>
        <div className={styles.box}>
          <a>
            <img className={styles.project_1} src={project4} alt="" />
          </a>
          <h5>Social Media With Face Shape Detection</h5>
          <p className={styles.project_desc}>
            I am making social-media for model similar to linked in where the
            model apply job and post a job, the model also can post something.
            There is also a AI for user to detect there face shape like square,
            round and etc
          </p>
          <button onClick={toGithub} className={styles.project_button}>
            <img src={githubLogo} className={styles.project_logo} alt="" />{" "}
            Github
          </button>
        </div>
      </div>
      <div className={styles.project_text} id="contact-section">
        <h1>Contact Me</h1>
      </div>
      <div className={styles.contact_container}>
        <div className={styles.contact_item}>
          <img
            src={emailLogo}
            alt="Email Icon"
            className={styles.contact_icon}
          />
          <p>Email: frenky.tan01@gmail.com</p>
        </div>
        <div className={styles.contact_item}>
          <img
            src={phoneLogo}
            alt="Phone Icon"
            className={styles.contact_icon}
          />
          <p>Phone: +62 822 8386 3317</p>
        </div>
        <div className={styles.contact_item}>
          <img
            src={locationLogo}
            alt="Location Icon"
            className={styles.contact_icon}
          />
          <p>Location: West Jakarta, Indonesia</p>
        </div>
      </div>
      <svg viewBox="0 0 1440 320">
        <path
          fill="#333333"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,181.3C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default App;
