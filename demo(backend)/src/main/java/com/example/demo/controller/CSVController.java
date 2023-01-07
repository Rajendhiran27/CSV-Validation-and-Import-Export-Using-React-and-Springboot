package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Controller;
// import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.CSVHelper;
import com.example.demo.CSVService;
import com.example.demo.DeveloperTutorial;
import com.example.demo.DeveloperTutorialRepository;
import com.example.demo.ResponseMessage;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/csv")
public class CSVController {
  @Autowired
  DeveloperTutorialRepository devo;
  @Autowired
  CSVService fileService;
  // DeveloperTutorial devtu;
  @PostMapping("/upload")
  public ResponseEntity<ResponseMessage> uploadFile( @RequestParam("file") MultipartFile file) {
    String message = "";
    System.out.println("raj thanosh!!@@#$$%%^&");
    

    if (CSVHelper.hasCSVFormat(file)) {
      try {
        fileService.save(file);
        // DeveloperTutorial developerTutorial=DeveloperTutorialRepository.findByEmailAndPhonenumber(file.getEmail());
        // if(developerTutorial.getPhonenumber().equals(file.getResource().getPhoneNumber(),));
        // return ResponseEntity.ok(file);

        // return (ResponseEntity<?>)ResponseEntity.internalServerError();

        message = "Uploaded the file successfully: " + file.getOriginalFilename();
        
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/csv/download/")
                .path(file.getOriginalFilename())
                .toUriString();

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message,fileDownloadUri));
      } catch (Exception e) {
        message = "Could not upload the file: " + file.getOriginalFilename() + "!";
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message,""));
      }
    }

    message = "Please upload a csv file!";
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message,""));
  }

  @GetMapping("/tutorials")
  public ResponseEntity<List<DeveloperTutorial>> getAllTutorials() {
    try {
      List<DeveloperTutorial> tutorials = fileService.getAllTutorials();

      if (tutorials.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(tutorials, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @PostMapping("/files")
	public DeveloperTutorial saveEmployeeDetails(@RequestBody DeveloperTutorial employee) {
		return devo.save(employee);
	}
  @GetMapping("/files/{id}")
	public DeveloperTutorial getEmployeeById(@PathVariable Long id) {
		return devo.findById(id).get();
	}
 
  @PutMapping("/employees")
	public DeveloperTutorial update(@RequestBody DeveloperTutorial employee) {
    System.out.println("raj thansh!!@@#$$%%^&");
		return devo.save(employee);
	}

  @GetMapping("/download/{fileName:.+}")
  public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
    InputStreamResource file = new InputStreamResource(fileService.load());

    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName)
        .contentType(MediaType.parseMediaType("application/csv"))
        .body(file);
  }
  @DeleteMapping("/employees/{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
		devo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}