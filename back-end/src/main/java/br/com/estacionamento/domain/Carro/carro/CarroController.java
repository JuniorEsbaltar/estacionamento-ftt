package br.com.estacionamento.domain.Carro.carro;



import br.com.estacionamento.shared.controller.ResponseAbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/carro")
public class CarroController extends ResponseAbstractController {

    @Autowired
    CarroService service;

    @GetMapping
    public ResponseEntity<?> findAll(){return jsonResponse(service.findAll());}


    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable long id){
        return jsonResponse(service.findById(id));
    }


    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody CarroEntity carro){
        return jsonResponse(service.save(carro));
    }


    @PutMapping
    public ResponseEntity<?> update(@RequestBody CarroEntity carro){
        return jsonResponse(service.save(carro));
    }


    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id){
        service.deleteById(id);
        return jsonResponse();}

}
