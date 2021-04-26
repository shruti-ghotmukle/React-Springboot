package net.javaguides.springboot.services;

import java.util.List;

import net.javaguides.springboot.model.Course;

public interface CourseService {

	public List<Course> getAllCourses();
	
	public Course getCourse(long CourseId);
	
	public Course addCourse(Course course);
	
	public Course updateCourse(Course course);

	public Course deleteCourse(long CourseId);
}
