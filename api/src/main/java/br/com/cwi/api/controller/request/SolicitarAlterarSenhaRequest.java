package br.com.cwi.api.controller.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class SolicitarAlterarSenhaRequest {
    @NotBlank @Email
    private String email;
}
