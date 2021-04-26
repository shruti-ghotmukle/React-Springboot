import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const LeftSide = () => {
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-courses" action>Add Courses</ListGroupItem>
            <ListGroupItem tag="a" href="/view-courses" action>View Courses</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem>
        </ListGroup>

    );
}
export default LeftSide;