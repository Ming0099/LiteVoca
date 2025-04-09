package com.LiteVoca.controller;

import com.LiteVoca.dto.user.SignupRequest;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/signup")
    @ResponseBody
    public String signup(@RequestBody SignupRequest req){
        System.out.println(req.getEmail());
        System.out.println(req.getNickname());
        System.out.println(req.getPassword());
        return "";
    }
}
