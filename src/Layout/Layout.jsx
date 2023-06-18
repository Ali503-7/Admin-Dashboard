import Nav from '../pages/Nav'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../App'
const Layout = () => {
  const { dark } = useContext(ThemeContext)
  console.log(dark)
  return (
    <div className={dark ? "dark" : ""}>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout