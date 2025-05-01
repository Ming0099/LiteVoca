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

@Service
@RequiredArgsConstructor
public class VocabService {
    private final VocabularyBookRepository vocabularyBookRepository;
    private final UserRepository userRepository;

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
}
