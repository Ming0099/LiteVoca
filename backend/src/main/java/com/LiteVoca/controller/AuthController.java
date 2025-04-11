package com.LiteVoca.controller;

import com.LiteVoca.dto.user.LoginRequest;
import com.LiteVoca.dto.user.SignupRequest;
import com.LiteVoca.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest req){
        userService.signup(req);
        return ResponseEntity.ok("회원가입 완료");
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest req){
        System.out.println(req.getEmail());
        System.out.println(req.getPassword());
        return "";
    }
}
