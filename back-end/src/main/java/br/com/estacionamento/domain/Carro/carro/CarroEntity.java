package br.com.estacionamento.domain.Carro.carro;

import br.com.estacionamento.domain.Garagem.garagem.GaragemEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name="carro")
public class CarroEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @NotNull
    @NotBlank
    @Column(name="modelo")
    private String modelo;

    @NotNull
    @NotBlank
    @Column(name="quilometragem")
    private String quilometragem;

    @NotNull
    @NotBlank
    @Column(name="valor")
    private String valor;

    @NotNull
    @NotBlank
    @Column(name="cor")
    private String cor;

    @NotNull
    @NotBlank
    @Column(name="descricao")
    private String descricao;

    @NotNull
    @NotBlank
    @Column(name="placa")
    private String placa;

    @NotNull
    @Column(name="anodefabricacao")
    @Temporal(value = TemporalType.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date anodefabricacao = new Date();

    @NotNull
    @ManyToOne
    @JoinColumn(name="garagem_id", referencedColumnName = "id")
    private GaragemEntity garagem;

}
