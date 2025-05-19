package com.LiteVoca.repository;

import com.LiteVoca.domain.Word;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WordRepository extends JpaRepository<Word, Long> {

    // 특정 단어장에 속한 모든 단어 조회
    List<Word> findByVocabId(Long vocabId);
}