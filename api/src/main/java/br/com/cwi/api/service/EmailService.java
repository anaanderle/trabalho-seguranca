package br.com.cwi.api.service;

import br.com.cwi.api.controller.request.SolicitarAlterarSenhaRequest;
import br.com.cwi.api.security.domain.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import static java.util.Objects.*;

@Service
public class EmailService {

    final String ASSUNTO_EMAIL = "Redefinição de senha";
    final String CORPO_EMAIL = "Para redefinir sua senha, entre no link a seguir: ";
    final String URL_PADRAO_DIRECIONAMENTO = "localhost:3000/escolherSenha";
    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private SenhaUsuarioService senhaUsuarioService;

    @Value("${username}")
    private String remetente;

    public void enviarEmail(SolicitarAlterarSenhaRequest request){

        Usuario usuario = buscarUsuarioService.porEmail(request.getEmail());

        if(nonNull(usuario)){
            String token = senhaUsuarioService.gerarToken(usuario);

            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

            simpleMailMessage.setFrom(remetente);
            simpleMailMessage.setTo(request.getEmail());
            simpleMailMessage.setSubject(ASSUNTO_EMAIL);
            simpleMailMessage.setText(CORPO_EMAIL + " " + URL_PADRAO_DIRECIONAMENTO + "?token=" + token);

            javaMailSender.send(simpleMailMessage);
        }
    }
}
