package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Permits your React app to connect
public class MainController {

    @GetMapping("/")
    public String home() {
        return "Hello Spring Boot!";
    }
} 