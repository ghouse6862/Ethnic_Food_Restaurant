import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import MenuItem from "./MenuItem";
import MenuPagination from "./MenuPagination";
import { getProducts, limit } from "../actions";

export default function Menu() {

    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState(null);

    const dispatch = useDispatch();

    const onSubmit = e => {
        
        e.preventDefault();
        setMsg(null);

        if(parseFloat(minPrice) > parseFloat(maxPrice)) {
            setMsg("Error! Minimum Price cannot be greater than Maximum Price");
        } else {
            getProducts(dispatch, category, minPrice, maxPrice, search);
        }
        
    }

    const move = page => {

        const skip = (page - 1 ) * limit; 
        getProducts(dispatch, category, minPrice, maxPrice, search, skip);
    
    }

    useEffect(() => {
        getProducts(dispatch, category, minPrice, maxPrice, search);
    },[]) 

    return(
        <div className="container" style={{marginTop : "30px"}}>
            {msg ? <Alert color="danger">{msg}</Alert> : null}
            <Form inline className="mb-5" onSubmit = {e => onSubmit(e)}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="category" className="mr-sm-2">Category: </Label>
                    <Input type="select" 
                        name="category" 
                        id="category"
                        onChange={ e => setCategory(e.target.value) }>
                        <option value="" selected>choose</option>
                        <option>Starters</option>
                        <option>Curries</option>
                        <option>Rice</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="MinPrice" className="mr-sm-2">Minimum Price: </Label>
                    <Input type="select" 
                        name="MinPrice" 
                        id="MinPrice"
                        onChange={ e => setMinPrice(e.target.value) }>
                        <option value="" selected>choose</option>
                        <option value="0">$0</option>
                        <option value="5">$5</option>
                        <option value="10">$10</option>
                        <option value="15">$15</option>
                        <option value="20">$20</option>
                        <option value="20.01">&gt;$20</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="MaxPrice" className="mr-sm-2">Maximum Price: </Label>
                    <Input type="select" 
                        name="MaxPrice" 
                        id="MaxPrice"
                        onChange={ e => setMaxPrice(e.target.value) }>
                        <option value="" selected>choose</option>
                        <option value="30">$30</option>
                        <option value="25">$25</option>
                        <option value="20">$20</option>
                        <option value="15">$15</option>
                        <option value="10">$10</option>
                        <option value="5">$5</option>
                        <option value="4.99">&lt;$5</option>
                    </Input>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="search" className="mr-sm-2">Search: </Label>
                    <Input type="search" 
                        name="search" 
                        id="search" 
                        placeholder="find...." 
                        onChange={ e => setSearch(e.target.value) }/>
                </FormGroup>
                    <Button name="btn" color="dark">Search</Button>
            </Form>
            <MenuItem />
            <MenuPagination move={move} />
        </div>
    )
}

