package com.LiteVoca.dto.user;

import lombok.Data;

@Data
public class SignupRequest {
    private String email;
    private String nickname;
    private String password;
}
