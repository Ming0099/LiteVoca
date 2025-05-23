package com.LiteVoca.util;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class JwtUtilTest {

    private JwtUtil jwtUtil;

    private final String testEmail = "test@example.com";
    private final Long testUserId = 123L;
    private final String testSecretKey = "12345678901234567890123456789012"; // 32 bytes 이상
    private final long testExpiration = 1000 * 60 * 60; // 1시간

    @BeforeEach
    void setUp(){
        jwtUtil = new JwtUtil(testSecretKey, testExpiration);
    }

    @Test
    // 토큰 생성
    void createToken() {
        String token = jwtUtil.createToken(testEmail, testUserId);
        assertNotNull(token);
        assertTrue(jwtUtil.validateToken(token));
    }

    @Test
    // 토큰 검증
    void validateToken() {
        String fakeToken = "fake.invalid.token";
        assertFalse(jwtUtil.validateToken(fakeToken));
    }

    @Test
    // 토큰에서 이메일 가져오기
    void getEmailFromToken() {
        String token = jwtUtil.createToken(testEmail, testUserId);
        String emailFromToken = jwtUtil.getEmailFromToken(token);
        assertEquals(testEmail, emailFromToken);
    }

    @Test
    // 토큰에서 userId 가져오기
    void getUserIdFromToken() {
        String token = jwtUtil.createToken(testEmail, testUserId);
        Long userIdFromToken = jwtUtil.getUserIdFromToken(token);
        assertEquals(testUserId, userIdFromToken);
    }
}