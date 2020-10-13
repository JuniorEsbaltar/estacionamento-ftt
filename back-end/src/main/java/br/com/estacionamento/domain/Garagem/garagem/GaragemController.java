package br.com.estacionamento.domain.Garagem.garagem;

import br.com.estacionamento.shared.controller.ResponseAbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/garagem")
public class GaragemController extends ResponseAbstractController {

    @Autowired
    GaragemService service;

    @GetMapping
    public ResponseEntity<?> findAll(){return jsonResponse(service.findAll());}

    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable long id){
        return jsonResponse(service.findById(id));
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<?> findByNome(@PathVariable String nome){return jsonResponse(service.findByNome(nome));}

    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody GaragemEntity garagem){
        return jsonResponse(service.save(garagem));
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody GaragemEntity garagem){
        return jsonResponse(service.save(garagem));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id){
       service.deleteById(id);
        return jsonResponse();
    }

}
