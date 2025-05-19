package com.LiteVoca.service;

import com.LiteVoca.domain.User;
import com.LiteVoca.domain.VocabularyBook;
import com.LiteVoca.domain.Word;
import com.LiteVoca.dto.voca.VocabDetailResponse;
import com.LiteVoca.dto.voca.VocabRequest;
import com.LiteVoca.dto.voca.VocabResponse;
import com.LiteVoca.dto.word.WordResponse;
import com.LiteVoca.repository.UserRepository;
import com.LiteVoca.repository.VocabularyBookRepository;
import com.LiteVoca.repository.WordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VocabService {
    private final VocabularyBookRepository vocabularyBookRepository;
    private final UserRepository userRepository;
    private final WordRepository wordRepository;

    // 단어장 생성
    public VocabResponse createVocabularyBook(Long userId, VocabRequest request){
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        VocabularyBook book = new VocabularyBook();
        book.setTitle(request.getTitle());
        book.setDescription(request.getDescription());
        book.setUser(user);
        book.setCreatedAt(LocalDateTime.now());
        book.setUpdatedAt(LocalDateTime.now());

        VocabularyBook saved = vocabularyBookRepository.save(book);

        return new VocabResponse(saved.getId(), saved.getTitle(), saved.getDescription(), 0);
    }

    // 단어장 가져오기 (조회)
    public List<VocabResponse> getMyVocabularyBooks(Long userId){
        List<VocabularyBook> books = vocabularyBookRepository.findByUserId(userId);
        return books.stream()
                .map(book -> new VocabResponse(book.getId(), book.getTitle(), book.getDescription(), book.getWords().size()))
                .collect(Collectors.toList());
    }

    // 단어장 삭제
    @Transactional
    public void deleteVocabularyBook(Long vocabId, Long userId) {
        VocabularyBook vocab = vocabularyBookRepository.findById(vocabId)
                .orElseThrow(() -> new IllegalArgumentException("단어장을 찾을 수 없습니다."));

        if (!vocab.getUser().getId().equals(userId)) {
            throw new SecurityException("삭제 권한이 없습니다.");
        }

        vocabularyBookRepository.delete(vocab);
    }

    public VocabDetailResponse getVocabularyBookById(Long vocabId, Long userId) {
        VocabularyBook book = vocabularyBookRepository.findByIdAndUserId(vocabId, userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 단어장을 찾을 수 없습니다."));

        List<Word> words = wordRepository.findByVocabId(vocabId);

        List<WordResponse> wordResponses = words.stream()
                .map(word -> new WordResponse(word.getId(), word.getEnglish(), word.getMeaning(), word.getExampleSentence()))
                .toList();

        return new VocabDetailResponse(
                book.getId(),
                book.getTitle(),
                book.getDescription(),
                wordResponses
        );
    }
}
