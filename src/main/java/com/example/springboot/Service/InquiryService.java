package com.example.springboot.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.Entity.Inquiry;
import com.example.springboot.Repository.InquiryRepository;

import java.text.SimpleDateFormat;
import java.util.Date;
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

    public void addResponse(Long id, String response, Date responseDate) {
        Optional<Inquiry> inquiryOpt = inquiryRepository.findById(id);
        if (inquiryOpt.isPresent()) {
            Inquiry inquiry = inquiryOpt.get();
            inquiry.setResponse(response);
            inquiry.setResponseDate(formatDate(responseDate));
            inquiryRepository.save(inquiry);
        }
    }

    private String formatDate(Date date) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        return sdf.format(date);
    }
}
