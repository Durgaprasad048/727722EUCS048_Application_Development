package com.example.springboot.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.Entity.Inquiry;
import com.example.springboot.Repository.InquiryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;

    public void saveInquiry(Inquiry inquiry) {
        inquiryRepository.save(inquiry);
    }

    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();
    }

    public Optional<Inquiry> getInquiryById(Long id) {
        return inquiryRepository.findById(id);
    }

    public void deleteInquiry(Long id) {
        inquiryRepository.deleteById(id);
    }
}
