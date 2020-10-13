package br.com.estacionamento.shared.service;

import java.util.List;

public interface AbService<T> {
    List<T> findAll();

    T findById(long id);

    T save(T object);

    void deleteById(long id);
}
