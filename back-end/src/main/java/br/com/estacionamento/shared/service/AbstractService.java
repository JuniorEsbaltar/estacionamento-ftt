package br.com.estacionamento.shared.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public abstract class AbstractService<T> implements AbService<T>{

    @Autowired
    protected JpaRepository<T, Long> repository;

    public List<T> findAll() { return repository.findAll();};

    public T findById(long id){return repository.findById(id).get();}

    public T save(T object){return repository.save(object);}

    public void deleteById(long id){
            repository.deleteById(id);
    }
}
