package com.LiteVoca.controller;

import com.LiteVoca.dto.voca.VocabRequest;
import com.LiteVoca.dto.voca.VocabResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/vocabulary-books")
@RequiredArgsConstructor
public class VocabController {

    // 1. 단어장 생성
    @PostMapping
    public ResponseEntity<VocabResponse> createVocab(@RequestBody VocabRequest request) {
        VocabResponse createdVocab = new VocabResponse();
        createdVocab.setId(1234L);
        createdVocab.setTitle(request.getTitle());
        createdVocab.setDescription(request.getDescription());
        createdVocab.setWordCount(1234);
        return ResponseEntity.ok(createdVocab);
    }

    // 2. 로그인한 사용자의 단어장 목록 조회
    @GetMapping("/me")
    public ResponseEntity<List<VocabResponse>> getMyVocabs() {
        List<VocabResponse> myVocabs = new ArrayList<>();
        VocabResponse createdVocab = new VocabResponse();
        createdVocab.setId(1234L);
        createdVocab.setTitle("test title");
        createdVocab.setDescription("test description");
        createdVocab.setWordCount(1234);
        myVocabs.add(createdVocab);
        return ResponseEntity.ok(myVocabs);
    }


}
