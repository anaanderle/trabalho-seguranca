package br.com.cwi.api.validator;

import br.com.cwi.api.service.PasswordTokenPublicData;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.time.Duration;
import java.time.Instant;
import java.util.Date;

@Component
public class ExpiracaoTokenValidator {

    final String ERRO_TOKEN_EXPIRADO = "Não foi possível realizar a alteração";

    public void verificaExpiracao(PasswordTokenPublicData publicData) {
        Instant criadoEm = new Date(publicData.getCreateAtTimestamp()).toInstant();
        Instant agora = new Date().toInstant();

        if(criadoEm.plus(Duration.ofMinutes(10)).isBefore(agora)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ERRO_TOKEN_EXPIRADO);
        }
    }
}
