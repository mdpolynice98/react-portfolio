import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IoMdReorder from "react-icons/ai";


function Navbar() {
  const [expandNavBar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbars" id={expandNavbar ? "open" : "close"}> 
      <div className="toggleButton">
        <button onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}
        > 
         <IoMdReorder />
        </button>
      </div>
      <Navbar bg="primary" variant="dark">
          <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
    </div>
  );
}

export default Navbar;


