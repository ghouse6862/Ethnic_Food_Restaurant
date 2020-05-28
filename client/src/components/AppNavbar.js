import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import ProductForm from './ProductForm';
import MyCart from "./MyCart";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { logoutUser, getOrders } from '../actions';


const AppNavbar = () => { //(props) was removed

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);
    const order = useSelector(state => state.order);
    //const token = useSelector(state => state.auth.token);
    const token = localStorage.getItem('token');

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const onClick = async () => {

        getOrders(dispatch, token);
        setRedirect(true);
        
    }
    
    return (
        <div>
            {redirect ? <Redirect to='/Orders'></Redirect> : null} 
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src="TajLogo.png"></img></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#About">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Menu">Menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            { ((token && isAuthenticated === null) || (isAuthenticated)) ?
            <Nav navbar>
        
            {user ? user.isAdmin ? 
            <NavItem>
            <ProductForm />
            </NavItem> 
            :
            <React.Fragment>
            <NavItem>
            <MyCart /> 
            </NavItem>
            <NavItem>
                <NavLink onClick = {() => onClick()} href="#">My Orders</NavLink>
            </NavItem>
            </React.Fragment>  
            : 
            null
            }    
            <NavItem>
                <NavLink onClick = {() => logoutUser(dispatch, user._id, token)} href="#">LogOut</NavLink>
            </NavItem>
            </Nav>     
            :
            <Nav navbar>
                <NavItem>
                    <SignUp />
                </NavItem>
                <NavItem>
                    <LogIn />
                </NavItem>
            </Nav> }
        </Collapse>
      </Navbar>
    </div>
    )
}

export default AppNavbar;

