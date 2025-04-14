package com.LiteVoca.service;

import com.LiteVoca.domain.User;
import com.LiteVoca.dto.user.LoginRequest;
import com.LiteVoca.dto.user.LoginResponse;
import com.LiteVoca.dto.user.SignupRequest;
import com.LiteVoca.repository.UserRepository;
import com.LiteVoca.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public void signup(SignupRequest req){
        if(userRepository.existsByEmail(req.getEmail())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        User user = User.builder()
                .email(req.getEmail()).password(passwordEncoder.encode(req.getPassword())).nickname(req.getNickname())
                .build();

        userRepository.save(user);
    }

    public LoginResponse login(LoginRequest req){
        User user = userRepository.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("이메일이 존재하지 않습니다."));

        if(!passwordEncoder.matches(req.getPassword(), user.getPassword())){
            throw  new RuntimeException("비밀번호가 일치하지 않습니다.");
        }

        String token = jwtUtil.createToken(user.getEmail(), user.getId());

        return new LoginResponse(token, user.getNickname());
    }
}
