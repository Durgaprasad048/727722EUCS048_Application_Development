package com.example.springboot.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.springboot.Dto.SignupRequest;
import com.example.springboot.Entity.Admin;
import com.example.springboot.Repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void registerAdmin(SignupRequest signupRequest) {
        if (adminRepository.existsByEmail(signupRequest.getEmail())) {
            throw new RuntimeException("Email is already taken");
        }

        Admin admin = new Admin();
        admin.setName(signupRequest.getName());
        admin.setEmail(signupRequest.getEmail());
        admin.setPassword(passwordEncoder.encode(signupRequest.getPassword()));

        adminRepository.save(admin);
    }
}
