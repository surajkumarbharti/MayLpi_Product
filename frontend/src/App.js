
import './App.css';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomeScreen  from './screens/HomeScreen';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropDown from 'react-bootstrap/NavDropDown';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';


function App() {
  const {state,dispatch:ctxDispatch} = useContext(Store);
  const {cart,userInfo} = state;

  const signoutHandler =()=>{
    ctxDispatch({type:'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin' ;
  };
  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <ToastContainer position='bottom-center'limit={1}/>
      <header>
        <Navbar bg = "dark" varient="dark">

          <Container>
            <LinkContainer to = "/">
            <Navbar.Brand className='compony'>
              MayLpI@The Compony</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto w-100 justify-content-end'>
              <Link to='/cart' className='nav-link'>
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg = 'danger'>
                    {cart.cartItems.reduce((a,c) => a + c.quantity,0)}
                  </Badge>
                )}
              </Link>
              {userInfo ? (
                <NavDropDown title = {userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to = "/profile">
                    <NavDropDown.Item>User Profile</NavDropDown.Item>
                  </LinkContainer>
                  <LinkContainer to = "/orderhistory">
                    <NavDropDown.Item>Order History</NavDropDown.Item>
                  </LinkContainer>
                  <NavDropDown.Divider/>
                  <Link 
                    className='dropdown-item'
                    to='#signout'
                    onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                </NavDropDown>
              ):(
                <Link className = "nav-link" to="/signin">
                Sign In 
                </Link>
              )}
            </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
      <Container className='mt-3'>
        <Routes>
          <Route path = "/product/:slug" element= {<ProductScreen />} />
          <Route path = "cart" element = {<CartScreen/>} />
          <Route path = "/signin" element = {<SigninScreen/>} />
          <Route path = "/signup" element = {<SignupScreen />} />
          <Route path = "/shipping" element = {<ShippingAddressScreen />}></Route>
          <Route path = "/payment" element = {<PaymentMethodScreen />} />
          <Route path = "/placeorder" element = {<PlaceOrderScreen />} />
          <Route path ='/order/:id' element = {<OrderScreen/>}/>
          <Route path = "/" element = {<HomeScreen/>} />
          <Route path = "/orderhistory" element = {<OrderHistoryScreen/>}></Route>
        </Routes>
        </Container>
        
      </main>
      <footer>
        <div className='text-center'>All rights reserved</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}


export default App;
