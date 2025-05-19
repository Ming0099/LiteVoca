package com.LiteVoca.controller;

import com.LiteVoca.dto.voca.VocabDetailResponse;
import com.LiteVoca.dto.voca.VocabRequest;
import com.LiteVoca.dto.voca.VocabResponse;
import com.LiteVoca.service.VocabService;
import com.LiteVoca.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/vocabulary-books")
@RequiredArgsConstructor
public class VocabController {

    private final VocabService vocabService;
    private final JwtUtil jwtUtil;

    // 1. 단어장 생성
    @PostMapping
    public ResponseEntity<VocabResponse> createVocab(@RequestBody VocabRequest request, @RequestHeader("Authorization") String authHeader) {
        // 토큰 추출
        String token = authHeader.replace("Bearer", "");
        Long userId = jwtUtil.getUserIdFromToken(token);
        VocabResponse response = vocabService.createVocabularyBook(userId, request);

        return ResponseEntity.ok(response);
    }

    // 2. 로그인한 사용자의 단어장 목록 조회
    @GetMapping("/me")
    public ResponseEntity<List<VocabResponse>> getMyVocabs(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        Long userId = jwtUtil.getUserIdFromToken(token);
        List<VocabResponse> responseList = vocabService.getMyVocabularyBooks(userId);
        return ResponseEntity.ok(responseList);
    }

    // 3. 단어장 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVocab(@PathVariable Long id, @RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        Long userId = jwtUtil.getUserIdFromToken(token);
        vocabService.deleteVocabularyBook(id, userId);
        return ResponseEntity.noContent().build();
    }

    // 단어장 상세 페이지
    @GetMapping("/{id}")
    public ResponseEntity<VocabDetailResponse> getVocabularyBookById(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        Long userId = jwtUtil.getUserIdFromToken(token.substring(7));
        VocabDetailResponse response = vocabService.getVocabularyBookById(id, userId);
        return ResponseEntity.ok(response);
    }
}
