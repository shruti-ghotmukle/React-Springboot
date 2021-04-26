import React ,{useState,useEffect,response,error} from "react";

import Course from './Course';

import axios from 'axios';
import base_url from './bootapi';
import {toast } from "react-toastify";


const Allcourses=()=>{

    useEffect(()=>{
        document.title="All Courses";

    },[]);

    const getCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                toast.success("Courses has been loaded",{position:"top-right"});

                console.log(response.data);
               setCourses(response.data);
                
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };
   
    useEffect(()=>{
        getCoursesFromServer();

    },[]);



    const [courses,setCourses]=useState([ ]);

    return(
        <div>
            <h3 className="text-center">All Courses</h3>
            <p className="text-center">List of courses as follows</p>
            {
                courses.length>0? courses.map((item)=> <Course key={item.id} course={item} />)
                : "No courses available"
            }
        </div>


    );
}
export default Allcourses;