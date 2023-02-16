import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/figures">Figures</Link>
        <Link to="/FigureFormCreate">Add Figure</Link>
      </nav>
    </header>
  )
}

export default Nav