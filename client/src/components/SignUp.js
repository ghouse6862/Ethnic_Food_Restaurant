import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
 } from 'reactstrap';
import { signUpUser, setError } from '../actions';


export default function SignUp() {

    const error = useSelector(state => state.error);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        dispatch({
            type : 'CLEAR_ERROR'
        });
        setIsOpen(!isOpen);
    };

    const [msg, setMsg] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phnno, setPhnno] = useState('');
    const [password, setPassword] = useState('');

    useEffect( () => {
        if(error.id === 'REGISTRATION_FAILURE') {
            setMsg(error.msg);
        }
        if(isAuthenticated) {
            if(isOpen) {
                toggle();
            }
        }
    }, [error, isAuthenticated] )

    const onSubmit = e => { 
        e.preventDefault();
        //perform validation
        if(!name.trim() || !email.trim() || !phnno.trim() || !password.trim()) {

            setError(dispatch, "All fields are required", 400, 'REGISTRATION_FAILURE');
        } 
        //check if password meets all requirements
        else if(!password.trim().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {

            const message = "Password should be minimum of 8 characters & should include atleast 1 lowercase, 1 uppercase, 1 digit & 1 special character";
            setError(dispatch, message, 400, 'REGISTRATION_FAILURE');
        }
        //check if phone number meets all requirements 
        else if(!phnno.trim().match(/^[0-9]*$/) || !(phnno.trim().length === 10)) {

            setError(dispatch ,"please enter a valid phone number", 400, 'REGISTRATION_FAILURE');
        }
        //check if name meets all requirements 
        else if(!name.trim().match(/^[a-zA-Z\s]*$/)) {

            setError(dispatch, "Name should contain only letters", 400, 'REGISTRATION_FAILURE');
        }
        else if(name.trim().length < 3) {

            setError(dispatch, "Name should contain atleast 3 characters", 400, 'REGISTRATION_FAILURE');
        }
        //if all fields are valid
        else {
            signUpUser(dispatch, name.trim(), email.trim(), phnno.trim(), password.trim());
        }
    }

    return (
        <div>
            <NavLink onClick={toggle} href="#">SignUp</NavLink>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>SignUp: </ModalHeader>
                <ModalBody>
                    {msg ? <Alert color="danger">{msg}</Alert> : null}
                    <Form onSubmit = { e => onSubmit(e) }>
                        <FormGroup>
                            <Label for="name">Name:</Label>
                            <Input name="name"
                                id="name"
                                type="text"
                                placeholder="enter your name"
                                onChange={ e => setName(e.target.value) } 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input name="email"
                                id="email"
                                type="email"
                                placeholder="enter your email id"
                                onChange={ e => setEmail(e.target.value) }  
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phnno">Phone Number:</Label>
                            <Input name="phnno"
                                id="phnno"
                                type="text"
                                placeholder="enter your phone number"
                                onChange={ e => setPhnno(e.target.value) }  
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password:</Label>
                            <Input name="password"
                                id="password"
                                type="password"
                                placeholder="enter your password"
                                onChange={ e => setPassword(e.target.value) }  
                            />
                        </FormGroup>
                        <Button
                            color="dark"
                            block
                            style={{marginTop : "0.5rem"}}
                            >SignUp</Button>
                        </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}


//export default connect(null, toggle)(MyComponent);