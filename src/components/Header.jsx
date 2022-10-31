import Logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <div className="container offset-2 col-8 d-flex flex-column align-items-center justify-content-center">
      <img
        src={Logo}
        alt="Logo"
        className='logo'
      />
    </div>
  )
}

export default Header;