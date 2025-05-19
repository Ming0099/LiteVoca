package com.LiteVoca.dto.voca;

import com.LiteVoca.dto.word.WordResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class VocabDetailResponse {
    private Long id;
    private String title;
    private String description;
    private List<WordResponse> words;
}
