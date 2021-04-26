package net.javaguides.springboot.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;
import net.javaguides.springboot.model.Course;
import net.javaguides.springboot.services.CourseService;
import net.javaguides.springboot.Repository.CourseRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CourseController {

	@Autowired
	private CourseService ser;
	
	@GetMapping("/home")
	public String home() {
		return "Welcome to project";
	}
	
	@GetMapping("/courses")
	public java.util.List<Course> getAllCourses(){
		return this.ser.getAllCourses();
	}
	
	@GetMapping("/courses/{CourseId}")
	public Course getCourse(@PathVariable String CourseId) {
		return this.ser.getCourse(Long.parseLong(CourseId));
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return this.ser.addCourse(course);
		
	}
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.ser.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{CourseId}")
	public Course deleteCourse(@PathVariable String CourseId) {
		return this.ser.deleteCourse(Long.parseLong(CourseId));
	}
}
