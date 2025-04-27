import {
  SiTypescript, SiJquery, SiMongodb, SiAngular, SiReact,
  SiNodedotjs, SiVuedotjs, SiExpress, SiBootstrap, SiTailwindcss,
  SiNextdotjs, SiGithub, SiFigma, SiAdobe
} from "react-icons/si";

const technologies = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "jQuery", icon: <SiJquery /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Adobe", icon: <SiAdobe /> },
];

function Technologies() {
  return (
    <div className="container py-5 px-5">
      <h2 className="text-center btn-custom mb-5">Technologies</h2>
      <div className="row g-4 justify-content-start">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
          >
            <div className=" text-white rounded-4 d-flex flex-column align-items-center p-4 shadow-sm"
              style={{ width: "128px", height: "128px", backgroundColor: '#4c3e78', boxShadow: "0 16px 20px rgba(0, 0, 0, 1)", filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#7d50e2";
                e.currentTarget.querySelector("svg").style.transform = "scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#4c3e78"; // Bootstrap dark
                e.currentTarget.querySelector("svg").style.transform = "scale(1)";
              }}
            >
              <div className="fs-2 mb-2" style={{ transition: "transform 0.3s ease" }}>
                {tech.icon}
              </div>
              <div className="text-center small">{tech.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies