package com.example.demo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.DeveloperTutorial;
@Repository
public interface DeveloperTutorialRepository extends JpaRepository<DeveloperTutorial,Long>{

    // DeveloperTutorial save(Optional<DeveloperTutorial> tuto);
    // Register findByEmailIdAndPassword(String emailId,String password);
    // DeveloperTutorial findByEmailAndPhonenumber(String email,String phonenumber);

    // DeveloperTutorial findById(String id);

    // DeveloperTutorial findOne(Long id);

}