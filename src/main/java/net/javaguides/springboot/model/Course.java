package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "courses")


public class Course {
	
	@Id
	
	private long id;
	@Column(name="uname")
	private String title;
	@Column(name="descript")
	private String description;
	
	public Course() {
		
	}
	
	
	
	public Course(long id,String title, String description) {
		super();
		this.id= id;
		this.title = title;
		this.description = description;
	}
	
	
	
	
	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}



	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", description=" + description + "]";
	}

	
	
}
