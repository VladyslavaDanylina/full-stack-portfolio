import { useState } from "react";
import {
  SiGithub,
  SiLinkedin,
  SiTelegram,
  SiGmail,
} from "react-icons/si";

const contacts = [
  {
    name: "GitHub",
    icon: <SiGithub />,
    link: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin />,
    link: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Telegram",
    icon: <SiTelegram />,
    link: "https://t.me/yourusername",
  },
  {
    name: "Email",
    icon: <SiGmail />,
    link: "mailto:vladyslavadanylina@gmail.com",
  },
];

function Contacts() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container  py-5 px-4 text-white">
      <h2 className="text-center btn-custom mb-5">Contact Me</h2>

      {/* Profile block */}
      <div className="d-flex flex-column align-items-center  mb-3">
        <img
          src="/images/your-photo.jpg"
          alt="Your Photo"
          className="rounded-circle shadow"
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
        <h4 className="py-5 display-3 title title-custom text-sm-3xl text-center  w-auto">Vladyslava Danylina</h4>
        <button
          className="d-flex mb-3 flex-lg-row px-4 py-2 justify-content-center btn btn-outline-light btn-custom rounded-pill border border-white/40"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Make an order"}
        </button>
      </div>

      {/* Contact Form */}
      {showForm && (
        <form
          action="https://formspree.io/f/xeogozjn"
          method="POST"
          className="bg-dark my-3 bg-opacity-50 rounded-4 shadow-lg p-4 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" name="name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea name="message" className="form-control" rows="4" required></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label d-block mb-2">Project Type</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="project" value="One-page website" id="onePage" required />
              <label className="form-check-label" htmlFor="onePage">
                One-page website
              </label>
            </div>
            <div className="form-check">npm run build

              <input className="form-check-input" type="radio" name="project" value="Multi-page website" id="multiPage" />
              <label className="form-check-label" htmlFor="multiPage">
                Multi-page website
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="project" value="Product catalog" id="catalog" />
              <label className="form-check-label" htmlFor="catalog">
                Product catalog
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="project" value="Admin panel" id="adminPanel" />
              <label className="form-check-label" htmlFor="adminPanel">
                Admin panel
              </label>
            </div>
          </div>

          <button type="submit" className=" w-100  mb-3 flex-lg-row px-4 py-2 btn btn-outline-light btn-custom rounded-pill border border-white/40">Send</button>
        </form>
      )}
      {/* Contact icons */}
      <div className="row g-5 justify-content-center my-3">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="col-6 col-sm-6 col-md-6 col-lg-2 d-flex justify-content-center"
          >
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div
                className="text-white rounded-4 d-flex flex-column align-items-center p-4"
                style={{
                  width: "130px",
                  minHeight: "130px",
                  backgroundColor: "#4c3e78",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#7d50e2";
                  e.currentTarget.querySelector("svg").style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#4c3e78";
                  e.currentTarget.querySelector("svg").style.transform = "scale(1)";
                }}
              >
                <div className="fs-1 mb-2" style={{ transition: "transform 0.3s ease" }}>
                  {contact.icon}
                </div>
                <div className="text-center small">{contact.name}</div>
              </div>
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Contacts;
