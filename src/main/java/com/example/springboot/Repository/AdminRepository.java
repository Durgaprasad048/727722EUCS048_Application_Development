package com.example.springboot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springboot.Entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    boolean existsByEmail(String email);
}
