package com.example.springboot.Repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.Entity.RefreshToken;
@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken,Integer>{
    Optional<RefreshToken> findByRefreshToken(String refreshToken);
}