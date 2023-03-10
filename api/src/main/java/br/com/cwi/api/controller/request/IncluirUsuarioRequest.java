package br.com.cwi.api.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Getter @Setter
public class IncluirUsuarioRequest {

    @NotBlank
    private String nome;
    @NotBlank
    private String telefone;
    @NotBlank
    private String email;
    @NotBlank
    private String senha;
    @NotBlank
    private String imagemUrl;
    @NotNull @NotEmpty
    private List<String> permissoes;
}
