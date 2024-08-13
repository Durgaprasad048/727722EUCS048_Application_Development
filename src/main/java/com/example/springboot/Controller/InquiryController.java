package com.example.springboot.Controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.springboot.Entity.Inquiry;
import com.example.springboot.Service.InquiryService;

@RestController
@RequestMapping("/api/inquiries")
@CrossOrigin(origins = "*")
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;

    @GetMapping
    public ResponseEntity<List<Inquiry>> getAllInquiries() {
        List<Inquiry> inquiries = inquiryService.getAllInquiries();
        return ResponseEntity.ok(inquiries);
    }
    @GetMapping("/status")
    public ResponseEntity<List<Inquiry>> getAllInquiriesWithStatus() {
        List<Inquiry> inquiries = inquiryService.getAllInquiries();
        return ResponseEntity.ok(inquiries);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inquiry> getInquiryById(@PathVariable Long id) {
        Optional<Inquiry> inquiryOpt = inquiryService.getInquiryById(id);
        return inquiryOpt.map(ResponseEntity::ok)
                         .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }

    @PostMapping
    public ResponseEntity<String> submitInquiry(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("subject") String subject,
            @RequestParam("message") String message,
            @RequestParam(value = "attachment", required = false) MultipartFile attachment) {
        
        Inquiry inquiry = new Inquiry(name, email, subject, message);
        
        if (attachment != null && !attachment.isEmpty()) {
            try {
                inquiry.setAttachment(attachment.getBytes());
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while processing attachment");
            }
        }
        
        inquiryService.saveInquiry(inquiry);
        return ResponseEntity.ok("Inquiry submitted successfully!");
    }

    @PutMapping("/{id}/assign")
    public ResponseEntity<Inquiry> assignStaff(
            @PathVariable Long id, 
            @RequestBody StaffAssignmentRequest request) {
        
        Optional<Inquiry> inquiryOpt = inquiryService.getInquiryById(id);
        if (inquiryOpt.isPresent()) {
            Inquiry inquiry = inquiryOpt.get();
            inquiry.setStaffName(request.getStaffName());
            inquiryService.saveInquiry(inquiry);
            return ResponseEntity.ok(inquiry);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PutMapping("/{id}/priority")
    public ResponseEntity<String> setPriority(
            @PathVariable Long id, 
            @RequestParam String priority) {
        
        Optional<Inquiry> inquiryOpt = inquiryService.getInquiryById(id);
        if (inquiryOpt.isPresent()) {
            Inquiry inquiry = inquiryOpt.get();
            inquiry.setPriority(priority);
            inquiryService.saveInquiry(inquiry);
            return ResponseEntity.ok("Priority updated successfully!");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Inquiry not found");
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<String> updateStatus(
            @PathVariable Long id, 
            @RequestParam String status) {
        
        Optional<Inquiry> inquiryOpt = inquiryService.getInquiryById(id);
        if (inquiryOpt.isPresent()) {
            Inquiry inquiry = inquiryOpt.get();
            inquiry.setStatus(status);
            inquiryService.saveInquiry(inquiry);
            return ResponseEntity.ok("Status updated successfully!");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Inquiry not found");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteInquiry(@PathVariable Long id) {
        inquiryService.deleteInquiry(id);
        return ResponseEntity.ok("Inquiry deleted successfully!");
    }

    @GetMapping("/{id}/attachment")
    public ResponseEntity<byte[]> getAttachment(@PathVariable Long id) {
        Optional<Inquiry> inquiryOpt = inquiryService.getInquiryById(id);
        if (inquiryOpt.isPresent()) {
            byte[] attachment = inquiryOpt.get().getAttachment();
            if (attachment != null) {
                return ResponseEntity.ok()
                        .header("Content-Disposition", "attachment; filename=\"attachment\"")
                        .body(attachment);
            }
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
}
