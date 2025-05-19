package com.LiteVoca.dto.word;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WordResponse {
    private Long id;
    private String english;
    private String meaning;
    private String exampleSentence;
}