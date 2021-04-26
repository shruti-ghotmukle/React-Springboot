package net.javaguides.springboot.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import net.javaguides.springboot.model.Course;


@Service
public class CourseServiceImpl implements CourseService {

	List<Course> list;
	
	public CourseServiceImpl() {
		// TODO Auto-generated constructor stub
		list=new ArrayList<>();
		list.add(new Course(121,"Java","Java Basics"));
		list.add(new Course(122,"React Js","React basics"));
	}
	
	@Override
	public List<Course> getAllCourses() {
		return list;
		// TODO Auto-generated method stub
		
	}

	@Override
	public Course getCourse(long CourseId) {
		// TODO Auto-generated method stub
		Course c=null;
		for(Course course : list) {
			if(course.getId()==CourseId) {
				c=course;
				break;
			}
		}
		return c;
		
	}

	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
		list.add(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
		list.forEach(e ->{
			if(e.getId()==course.getId()) {
				e.setTitle(course.getTitle());
				e.setDescription(course.getDescription());
			}
		});
		return course;
	}

	@Override
	public Course deleteCourse(long CourseId) {
		// TODO Auto-generated method stub
		list=this.list.stream().filter(e -> e.getId()!=CourseId).collect(Collectors.toList());
		return null;
	}
	
	

}
