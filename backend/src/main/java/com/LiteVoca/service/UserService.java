package com.LiteVoca.service;

import com.LiteVoca.domain.User;
import com.LiteVoca.dto.user.SignupRequest;
import com.LiteVoca.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void signup(SignupRequest req){
        if(userRepository.existsByEmail(req.getEmail())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        User user = User.builder()
                .email(req.getEmail()).password(passwordEncoder.encode(req.getPassword())).nickname(req.getNickname())
                .build();

        userRepository.save(user);
    }
}
