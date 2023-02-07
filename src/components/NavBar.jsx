import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LogoJS from '../assets/javascript.svg'
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={LogoJS}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Projeto React
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav><Link to="/" style={{textDecoration:"none", color:"red", marginRight:20}}>Home</Link></Nav>
            <Nav><Link to="/sobre" className={style.links}>Sobre</Link></Nav>
            <Nav><Link to="/tarefa" className={style.links}>Tarefas</Link></Nav>
            <Nav><Link to="/contato">Contato</Link></Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;