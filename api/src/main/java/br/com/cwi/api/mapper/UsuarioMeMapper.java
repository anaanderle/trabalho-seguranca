package br.com.cwi.api.mapper;

import br.com.cwi.api.controller.response.BuscarMeResponse;
import br.com.cwi.api.security.domain.Usuario;

import java.util.stream.Collectors;

public class UsuarioMeMapper {

    public static BuscarMeResponse toResponse(Usuario usuario) {

        return BuscarMeResponse.builder()
                .id(usuario.getId())
                .nome(usuario.getNome())
                .telefone(usuario.getTelefone())
                .email(usuario.getEmail())
                .imagemUrl(usuario.getImagemUrl())
                .build();
    }
}
