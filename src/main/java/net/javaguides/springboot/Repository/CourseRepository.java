package net.javaguides.springboot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
