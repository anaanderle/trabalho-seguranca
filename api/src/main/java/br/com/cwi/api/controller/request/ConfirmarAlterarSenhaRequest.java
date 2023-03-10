package br.com.cwi.api.controller.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ConfirmarAlterarSenhaRequest {
    @NotBlank
    private String senha;

    @NotBlank
    private String token;
}