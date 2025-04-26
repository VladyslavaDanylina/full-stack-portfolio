import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Navbar() {
  useEffect(() => {
    const menu = document.getElementById('navbarMenu')
    if (!menu) return

    // Добавить плавный уход при скрытии
    menu.addEventListener('hide.bs.collapse', () => {
      menu.classList.add('collapsing')
    })

    // Удалить класс после анимации
    menu.addEventListener('hidden.bs.collapse', () => {
      menu.classList.remove('collapsing')
    })
  }, [])


  return (
    <div className="position-relative z-10 w-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-3">
        <div className="container d-flex justify-content-between py-2 align-items-center">

          {/* Лого */}
          <Link className="navbar-brand fs-4" to="/">My Portfolio</Link>

          {/* Кнопка для мобильного меню */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              borderWidth: '1px',        
              borderColor: 'white'     
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Общий collapse-блок */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
            
            {/* Десктопное меню */}
            <ul className="navbar-nav d-none d-lg-flex gap-lg-3">
              <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technologies">Technologies</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contacts">Contacts</Link></li>
            </ul>

            {/* Мобильное меню */}
            <ul
  className="navbar-nav d-lg-none position-absolute top-100 end-0 mt-2 rounded shadow z-1 px-3 py-2 text-end"
  style={{
    minWidth: '150px',
    marginRight: '0.75rem',
    backgroundColor: 'rgba(50,27, 124,1)'
  }}
>
              <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technologies">Technologies</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contacts">Contacts</Link></li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar