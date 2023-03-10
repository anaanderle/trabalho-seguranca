package br.com.cwi.api.controller.response;

import lombok.*;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BuscarMeResponse {

    private Long id;
    private String nome;
    private String email;
    private String telefone;
    private String imagemUrl;
}
