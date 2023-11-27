import { Navbar, NavbarBrand } from 'reactstrap';
import Logo from '../app/assets/img/5corners.png';

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={Logo} alt="logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
