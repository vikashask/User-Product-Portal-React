import React from 'react';
// import {Link} from "react-router-dom";
// import {Image} from "react-bootstrap";
// import logo from './../../../src/logo.svg';

const Createrow = (props) => {
    return props.userList.map(user =>{
        const { firstName, lastName, email, age ,_id} = user
        return(
            <tr key={_id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{age}</td>
            </tr>
        )
    })
   
}

export default Createrow;

