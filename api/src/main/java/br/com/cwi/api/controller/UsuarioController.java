package br.com.cwi.api.controller;

import br.com.cwi.api.controller.request.AlterarUsuarioRequest;
import br.com.cwi.api.controller.request.ConfirmarAlterarSenhaRequest;
import br.com.cwi.api.controller.request.SolicitarAlterarSenhaRequest;
import br.com.cwi.api.controller.response.*;
import br.com.cwi.api.controller.request.IncluirUsuarioRequest;
import br.com.cwi.api.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IncluirUsuarioService incluirUsuarioService;

    @Autowired
    private BuscarMeService buscarMeService;

    @Autowired
    private AlterarUsuarioService alterarUsuarioService;

    @Autowired
    private BuscarUsuariosService buscarUsuariosService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private SenhaUsuarioService senhaUsuarioService;

    @PostMapping
    public IncluirUsuarioResponse incluir(@Valid @RequestBody IncluirUsuarioRequest request) {
        return incluirUsuarioService.incluir(request);
    }

    @PutMapping
    public IdResponse alterar(@Valid @RequestBody AlterarUsuarioRequest request){
        return alterarUsuarioService.alterar(request);
    }

    @GetMapping("/me")
    public BuscarMeResponse buscarMe() {
        return buscarMeService.buscar();
    }

    @GetMapping("/{texto}")
    public List<UsuarioResumidoResponse> buscarUsuarios(@PathVariable String texto){
        return buscarUsuariosService.buscarUsuarios(texto);
    }

    @PostMapping("/senha/alterar/solicitar/publico")
    public void alterarSenhaSolicitacao(@RequestBody @Valid SolicitarAlterarSenhaRequest request){
        emailService.enviarEmail(request);
    }

    @PostMapping("/senha/alterar/confirmar/publico")
    public void alterarSenhaConfirmar(@RequestBody @Valid ConfirmarAlterarSenhaRequest request) {
        senhaUsuarioService.mudarSenha(request);
    }
}
