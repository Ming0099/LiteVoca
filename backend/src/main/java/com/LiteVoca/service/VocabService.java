package com.LiteVoca.service;

import com.LiteVoca.domain.User;
import com.LiteVoca.domain.VocabularyBook;
import com.LiteVoca.dto.voca.VocabRequest;
import com.LiteVoca.dto.voca.VocabResponse;
import com.LiteVoca.repository.UserRepository;
import com.LiteVoca.repository.VocabularyBookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VocabService {
    private final VocabularyBookRepository vocabularyBookRepository;
    private final UserRepository userRepository;

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
}
