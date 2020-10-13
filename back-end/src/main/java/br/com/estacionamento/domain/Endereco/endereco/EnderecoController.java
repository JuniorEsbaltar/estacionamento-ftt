package br.com.estacionamento.domain.Endereco.endereco;

import br.com.estacionamento.shared.controller.ResponseAbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/endereco")
public class EnderecoController  extends ResponseAbstractController {

    @Autowired
    EnderecoService service;

    @GetMapping
    public ResponseEntity<?> findAll(){return jsonResponse(service.findAll());}

    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable long id){
        return jsonResponse(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody EnderecoEntity endereco){
        return jsonResponse(service.save(endereco));
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody EnderecoEntity endereco){
        return jsonResponse(service.save(endereco));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id){
        service.deleteById(id);
        return jsonResponse();}
}
