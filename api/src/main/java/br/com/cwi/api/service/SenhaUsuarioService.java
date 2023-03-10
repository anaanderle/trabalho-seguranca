package br.com.cwi.api.service;

import br.com.cwi.api.controller.request.ConfirmarAlterarSenhaRequest;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.repository.UsuarioRepository;
import br.com.cwi.api.validator.ExpiracaoTokenValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.token.SecureRandomFactoryBean;
import org.springframework.security.core.token.KeyBasedPersistenceTokenService;
import org.springframework.security.core.token.Token;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Base64;

@Service
public class SenhaUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private ExpiracaoTokenValidator expiracaoTokenValidator;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private KeyBasedPersistenceTokenService getInstance(Usuario usuario){
        KeyBasedPersistenceTokenService token = new KeyBasedPersistenceTokenService();

        token.setServerSecret(usuario.getSenha());
        token.setServerInteger(16);

        try{
            token.setSecureRandom(new SecureRandomFactoryBean().getObject());
        }
        catch (Exception exception){

        }

        return token;
    }

    public String gerarToken(Usuario usuario) {
        KeyBasedPersistenceTokenService tokenService = getInstance(usuario);

        Token token = tokenService.allocateToken(usuario.getEmail());

        return token.getKey();
    }

    @Transactional
    public void mudarSenha(ConfirmarAlterarSenhaRequest request) {

        PasswordTokenPublicData tokenPublico = getTokenPublico(request.getToken());

        expiracaoTokenValidator.verificaExpiracao(tokenPublico);

        Usuario usuario = buscarUsuarioService.porEmail(tokenPublico.getEmail());

        KeyBasedPersistenceTokenService token = getInstance(usuario);
        token.verifyToken(request.getToken());

        usuario.setSenha(passwordEncoder.encode(request.getSenha()));
        usuarioRepository.save(usuario);
    }

    private PasswordTokenPublicData getTokenPublico(String rawToken) {
        String rawTokenDecoded = new String(Base64.getDecoder().decode(rawToken));
        String[] tokenParts = rawTokenDecoded.split(":");
        Long timestamp = Long.parseLong(tokenParts[0]);
        String email = tokenParts[2];

        return new PasswordTokenPublicData(email, timestamp);
    }
}
