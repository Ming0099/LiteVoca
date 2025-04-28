package com.LiteVoca.dto.voca;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class VocabResponse {
    private Long id;
    private String title;
    private String description;
    private int wordCount;
}
