import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header className="bg-blue-950 text-white p-6">
        <h1 className="text-3xl font-bold text-center mb-2">Projeto Exemplo 8</h1>
      <Link to='/'>Home</Link>
    </header>
  )
}

export default Nav
