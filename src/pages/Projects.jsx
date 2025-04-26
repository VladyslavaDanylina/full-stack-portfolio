import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Project One',
    image: '', // потом добавишь URL
    link: '#'
  },
  {
    title: 'Project Two',
    image: '',
    link: '#'
  },
  {
    title: 'Project Three',
    image: '',
    link: '#'
  },
  {
    title: 'Project Four',
    image: '',
    link: '#'
  },
  {
    title: 'Project Five',
    image: '',
    link: '#'
  },
  {
    title: 'Project Six',
    image: '',
    link: '#'
  }
];

function Projects() {
  return (
    <div className="container py-5 px-4">
      <h2 className="text-center btn-custom mb-5">My Projects</h2>
      <div className="row g-4 justify-content-start">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none w-100"
            >
              <div
                className="rounded-4 text-white overflow-hidden shadow-sm d-flex flex-column"
                style={{
                  backgroundColor: '#4c3e78',
                  boxShadow: "0 8px 8px rgba(0, 0, 0, 0.5)",
                  filter: 'drop-shadow(3px 8px 2px rgba(0, 0, 0, 0.5))',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  cursor: 'pointer',
                  minHeight: '260px',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7d50e2';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#4c3e78';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-100"
                  style={{
                    backgroundColor: '#2c2442',
                    height: '150px'
                  }}
                >
                  {/* Placeholder для изображения */}
                </div>
                <div className="p-3 text-center fw-medium fs-6">
                  {project.title}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
