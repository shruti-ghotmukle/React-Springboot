import axios from 'axios';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import base_url from './bootapi';


const Course = ({course}) => {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course deleted");
                
            },
            (error)=>{
                toast.error("Something wrong")
            }
        )
    }
    
    return(
    <Card>
        <CardBody>
            <CardTitle className="font-weight-bold text-center">{course.title}</CardTitle>
            <CardText className="text-center">{course.description}</CardText>
            <Container className="text-center">
                <ToastContainer className="text-center"/>
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id)
                }} >
                Delete
                </Button>
               
                <Button color="warning ml-3">Update</Button>
            </Container>
        </CardBody>
    </Card>
    );
}
export default Course;