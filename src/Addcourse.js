import axios from "axios";
import React, { Fragment,useEffect, useState,e,target,value } from "react";
import { Button, Container, Form,FormGroup,Label,Input, Toast } from "reactstrap";
import base_url from "./bootapi";
import {ToastContainer,toast} from 'react-toastify';


const Addcourse=() => {

  useEffect(()=>{
    document.title="Add Courses";

},[]);

const [course,setcourse]=useState({});

const handleForm=(e)=>{
  console.log(course);
  Addonserver(course);
  e.preventDefault();
};

const Addonserver=(data)=>{
  axios.post(`${base_url}/courses`,data).then(
    (response)=>{
        console.log(response.data);
        console.log("success");
        setcourse({id:"",title:"",description:""});
    },
    (error)=>{
        console.log(error);
        console.log("error");
    }
  );
};

const addhandle=()=>{
  toast("Added successfully");
}

    return <Fragment>
        <h1 className="text-center">Fill Course Details</h1>
        <Form onSubmit={handleForm}>
        <FormGroup>
            <Label for="userId">Course ID</Label>
            <Input type="text"
            placeholder="Enter ID" 
           // name="userId" 
            id="userId"
              onChange={(e)=>{
                setcourse({...course,id:e.target.value});

              }}
              />
            
          </FormGroup>

          <FormGroup>
            <Label for="title">Course Title</Label>
            <Input type="text"
            placeholder="Enter Title"  
            id="title"  
            onChange={(e)=>{
              setcourse({...course,title:e.target.value});
            }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">Course Description</Label>
            <Input type="textarea"
            placeholder="Enter Description" 
            id="description"  
            style={{height:150}}
            onChange={(e)=>{
              setcourse({...course,description:e.target.value});
            }}
            />
            
          </FormGroup>
           
          <ToastContainer className="text-center"/>
              <Button type="submit" color="success" onClick={addhandle}>Add Course</Button>
              
              <Button type="reset" color="warning ml-3"
              onClick={()=>{
                setcourse({id:"",title:"",description:""});
              }} >Clear</Button>

         
        </Form>
    </Fragment>
};
export default Addcourse;