package br.com.estacionamento.domain.Garagem.garagem;

import br.com.estacionamento.domain.Endereco.endereco.EnderecoEntity;

import br.com.estacionamento.domain.Endereco.endereco.EnderecoService;
import br.com.estacionamento.shared.service.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.estacionamento.shared.controller.ResponseAbstractController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@Service
public class GaragemService extends AbstractService<GaragemEntity>{

    @Autowired
    GaragemRepository garagemRepository;

    @Autowired
    EnderecoService enderecoService;

    public GaragemEntity save(GaragemEntity garagemEntity ){
        EnderecoEntity enderecoEntity=  enderecoService.save(garagemEntity.getEndereco());
        garagemEntity.setEndereco(enderecoEntity);
        repository.save(garagemEntity);
        return garagemEntity;
    }

    public List<GaragemEntity> findByNome(String nome){
        return garagemRepository.findByName(nome);
    }

}
