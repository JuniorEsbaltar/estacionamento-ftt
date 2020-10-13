package br.com.estacionamento.domain.Garagem.garagem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GaragemRepository extends JpaRepository<GaragemEntity,Long>{
    @Query(value = "SELECT * FROM garagem g Where g.nome= :nome", nativeQuery = true)
    List<GaragemEntity>  findByName(@Param("nome") String nome);
}
