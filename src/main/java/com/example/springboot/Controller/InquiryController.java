package com.example.springboot.Controller;

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
        inquiryService.saveInquiry(inquiry);

        return ResponseEntity.ok("Inquiry submitted successfully!");
    }

    @PutMapping("/{id}/assign")
    public ResponseEntity<String> assignStaff(
            @PathVariable Long id, 
            @RequestParam String staffName) {
        
        Optional<Inquiry> inquiryOpt = inquiryService.getInquiryById(id);
        if (inquiryOpt.isPresent()) {
            Inquiry inquiry = inquiryOpt.get();
            inquiry.setStaffName(staffName);
            inquiryService.saveInquiry(inquiry);
            return ResponseEntity.ok("Staff assigned successfully!");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Inquiry not found");
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
