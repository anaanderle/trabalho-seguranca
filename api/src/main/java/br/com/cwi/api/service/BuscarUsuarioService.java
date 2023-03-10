package br.com.cwi.api.service;

import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class BuscarUsuarioService {

    final String ERRO_USUARIO_NAO_ENCONTRADO = "Usuario não encontrado";

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario porEmail(String email){

        return usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(BAD_REQUEST, ERRO_USUARIO_NAO_ENCONTRADO));
    }
}
