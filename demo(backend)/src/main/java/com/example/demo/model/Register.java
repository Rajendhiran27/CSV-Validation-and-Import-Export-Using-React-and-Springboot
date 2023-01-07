package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;



@Entity
@Table(name = "user")
public class Register{
    	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    @NotBlank(message = "Name may not be null")
    @Column(name = "confirm_password",unique=true)
    private String confirmPassword;
    @NotBlank(message = "Name may not be null")
    @Column(name = "email",unique=true)
    private String emailId;
    @NotBlank(message = "Name may not be null")
    @Column(name = "password",unique=true)
    private String password;
    @NotBlank(message = "Name may not be null")
    @Column(name = "phone_number",unique=true)
    private String phoneNumber;
    @NotBlank(message = "Name may not be null")
    @Column(name = "user_name")
    private String userName;

    public Register(){

    }
    public Register( String userName, String password, String confirmPassword, String phoneNumber,String emailId) {
                super();
        this.userName = userName;
       this.password = password;
       this. confirmPassword = confirmPassword;
       this. phoneNumber = phoneNumber;
        this.emailId = emailId;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
       this.userName = userName;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getConfirmPassword() {
        return confirmPassword;
    }
    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public String toString(){
        return emailId +" "+ password;
    }

}