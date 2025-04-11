package com.LiteVoca.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // TODO SECRET_KEY는 외부주입으로 바꿀것!
    private final String SECRET_KEY = "12345678901234567890123456789012"; // 테스트용 최소 32 바이트 이상으로 해야됨
    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 24시간 - JWT 만료시간

    // key 생성
    private final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

    // 토큰 생성
    public String createToken(String email, Long userId){
        return Jwts.builder()
                .setSubject(email)
                .claim("userId", userId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    // 토큰 검증
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    // 토큰에서 이메일 가져오기
    public String getEmailFromToken(String token) {
        Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
        return claims.getSubject();
    }

    // 토큰에서 userId 가져오기
    public Long getUserIdFromToken(String token) {
        Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
        return claims.get("userId", Long.class);
    }
}
