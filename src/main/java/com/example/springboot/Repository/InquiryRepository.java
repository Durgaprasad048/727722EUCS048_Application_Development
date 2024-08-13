package com.example.springboot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springboot.Entity.Inquiry;

import java.util.List;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
    
    // Custom query to find inquiries by status
    List<Inquiry> findByStatus(String status);

    // Custom query to find inquiries by priority
    List<Inquiry> findByPriority(String priority);

    // Custom query to find inquiries by staff name
    List<Inquiry> findByStaffName(String staffName);

    // Example custom query to find inquiries by a combination of status and priority
    List<Inquiry> findByStatusAndPriority(String status, String priority);
}
