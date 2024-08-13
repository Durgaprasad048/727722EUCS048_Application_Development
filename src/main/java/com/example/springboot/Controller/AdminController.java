package com.example.springboot.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.Dto.SignupRequest;
import com.example.springboot.Service.AdminService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest signupRequest) {
        try {
            adminService.registerAdmin(signupRequest);
            return ResponseEntity.ok("Sign up successful");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
