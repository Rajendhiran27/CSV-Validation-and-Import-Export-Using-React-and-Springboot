package com.example.demo;

// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.Id;
// import javax.persistence.Table;


// @Entity
// @Table(name = "developer_tutorial")
// public class DeveloperTutorial {

// 	  @Id
// 	  @Column(name = "id")
// 	  private long id;

// 	  @Column(name = "title")
// 	  private String title;

// 	  @Column(name = "description")
// 	  private String description;

// 	  @Column(name = "published")
// 	  private boolean published;

// 	  public DeveloperTutorial() {

// 	  }

// 	  public DeveloperTutorial(long id, String title, String description, boolean published) {
// 	    this.id = id;
// 	    this.title = title;
// 	    this.description = description;
// 	    this.published = published;
// 	  }

// 	  public long getId() {
// 	    return id;
// 	  }

// 	  public void setId(long id) {
// 	    this.id = id;
// 	  }

// 	  public String getTitle() {
// 	    return title;
// 	  }

// 	  public void setTitle(String title) {
// 	    this.title = title;
// 	  }

// 	  public String getDescription() {
// 	    return description;
// 	  }

// 	  public void setDescription(String description) {
// 	    this.description = description;
// 	  }

// 	  public boolean isPublished() {
// 	    return published;
// 	  }

// 	  public void setPublished(boolean isPublished) {
// 	    this.published = isPublished;
// 	  }

// 	  @Override
// 	  public String toString() {
// 	    return "Tutorial [id=" + id + ", title=" + title + ", desc=" + description + ", published=" + published + "]";
// 	  }
// 	}
// package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(name = "files", uniqueConstraints = {@UniqueConstraint(columnNames = {"email", "phonenumber"}), @UniqueConstraint(columnNames = "phonenumber")})
public class DeveloperTutorial {

	    	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	// @Column(name="id")
	private Long id;
	  @Column(name = "firstname")
	  private String firstname;

	  @Column(name = "lastname")
	  private String lastname;

	  @Column(name = "email",unique = true)
	  private  String email;

	  @Column(name = "password")
	  private String password;

	  @Column(name = "phonenumber",unique = true)
	  private String phonenumber;

	  public DeveloperTutorial() {

	  }

	public DeveloperTutorial(Long id,String firstname, String lastname, String email, String password, String phonenumber) {
		super();
		// this.id=id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.phonenumber = phonenumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	@Override
	public String toString() {
		return "DeveloperTutorial [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email="
				+ email + ", password=" + password + ", phonenumber=" + phonenumber + "]";
	}
    
	
	  

// 	  public DeveloperTutorial(long id, String title, String description, boolean published) {
// 	    this.id = id;
// 	    this.title = title;
// 	    this.description = description;
// 	    this.published = published;
// 	  }

// 	  public long getId() {
// 	    return id;
// 	  }

// 	  public void setId(long id) {
// 	    this.id = id;
// 	  }

// 	  public String getTitle() {
// 	    return title;
// 	  }

// 	  public void setTitle(String title) {
// 	    this.title = title;
// 	  }

// 	  public String getDescription() {
// 	    return description;
// 	  }

// 	  public void setDescription(String description) {
// 	    this.description = description;
// 	  }

// 	  public boolean isPublished() {
// 	    return published;
// 	  }

// 	  public void setPublished(boolean isPublished) {
// 	    this.published = isPublished;
// 	  }

// 	  @Override
// 	  public String toString() {
// 	    return "Tutorial [id=" + id + ", title=" + title + ", desc=" + description + ", published=" + published + "]";
// 	  }
	}
