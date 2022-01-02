import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Link from 'next/link';
import Head from "next/head"
const Navbarw = () => {
  return (
    <>
        <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>
    
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <a className="nav-item nav-link"> Home</a>
            </Link>
            <Link href="/about"><a className="nav-item nav-link">About</a></Link>
            <Link href="/contact"><a className="nav-item nav-link"> Contact  </a></Link>
            <Link href="/login"><a className="nav-item nav-link"> Login  </a></Link>
            <Link href="/register"><a className="nav-item nav-link">Sign Up </a></Link>
            <Link href="/logout"><a className="nav-item nav-link">  Log Out </a></Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            
              <NavDropdown.Item > <Link href="/inventory"><a className="nav-item nav-link " style={{color: 'black' }}>Inventory </a></Link></NavDropdown.Item>
              <NavDropdown.Item as={Link} href="admin">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl className="mr-sm-2" type="text" placeholder="Search"  />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
};

export default Navbarw;
