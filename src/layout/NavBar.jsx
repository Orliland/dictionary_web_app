import FontSelector from '../components/FontSelector'
import ThemeSelector from '../components/ThemeSelector'

import Logo from '../assets/logo.svg'

const NavBar = () => {
  return <nav className='flex justify-between'>
    <img src={Logo} alt="Dictionary web app logo" className='h-8 md:h-[36.5px]' />
    <div>
      <FontSelector />
      <ThemeSelector />
    </div>
  </nav>
}

export default NavBar