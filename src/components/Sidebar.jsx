import { NavLink } from "react-router-dom"

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>

      <NavLink to="/about">
        <button>About</button>
      </NavLink>
    </aside>
  )
}
