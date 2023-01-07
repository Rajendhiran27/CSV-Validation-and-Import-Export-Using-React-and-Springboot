package com.example.demo.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
// import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.ResponseBody;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Register;
import com.example.demo.repo.RegisterRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class Controller{

	@Autowired
	private RegisterRepository registerRepository;
	
	// @PostMapping("/login")
	// public boolean loginUser(@RequestParam("emailId")String emailId,@RequestParam("passWord")String passWord){
	// 	Register reg=registerRepository.findByEmailIdAndPassWord(emailId, passWord);
	// 	if(Objects.isNull(reg)){
	// 		return false;
	// 	}
	// 	return true;

	// }
	// @PostMapping("/login")
	// public ResponseEntity<?>  loginUser(@RequestParam(value="emailId",required=true)String emailId,@RequestParam(value="password",required=true)String password){
	// 	Register register=registerRepository.findByEmailIdAndPassword(emailId, password);
	// 	if(Objects.isNull(register))
	// 		return ResponseEntity.ok(register);
	// return (ResponseEntity<?>) ResponseEntity.internalServerError();	
	
	// }
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Register  reg){
		System.out.println(reg);
		Register register=registerRepository.findByEmailId(reg.getEmailId());
		if(register.getPassword().equals(reg.getPassword()))
		   return ResponseEntity.ok(register);

		   return (ResponseEntity<?>) ResponseEntity.internalServerError();	
	}

	// get all employees
	@GetMapping("/register")
	public List<Register> getRegisterList(){
		return registerRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/register")
	public Register createRegister(@RequestBody Register register) {
		
		return registerRepository.save(register);
	}
	
	// get employee by id rest api
	@GetMapping("/register/{id}")
	public ResponseEntity<Register> getRegisterById(@PathVariable Long id) {
		Register register = registerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(register);
	}
	
	// update employee rest api
	
	@PutMapping("/register/{id}")
	public ResponseEntity<Register> updateRegister(@PathVariable Long id, @RequestBody Register registerDetails){
		Register register = registerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		register.setUserName(registerDetails.getUserName());
		register.setPassword(registerDetails.getPassword());
		register.setConfirmPassword(registerDetails.getConfirmPassword());
		register.setPhoneNumber(registerDetails.getPhoneNumber());
		register.setEmailId(registerDetails.getEmailId());
		
		Register updatedRegister = registerRepository.save(register);
		return ResponseEntity.ok(updatedRegister);
	}
	
	// delete employee rest api
	@DeleteMapping("/register/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteRegister(@PathVariable Long id){
		Register register = registerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
	registerRepository.delete(register);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
