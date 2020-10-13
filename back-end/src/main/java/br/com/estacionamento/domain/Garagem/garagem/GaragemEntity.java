package br.com.estacionamento.domain.Garagem.garagem;

import br.com.estacionamento.domain.Carro.carro.CarroEntity;
import br.com.estacionamento.domain.Endereco.endereco.EnderecoEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name="garagem")
public class GaragemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @NotNull
    @NotBlank
    @Column(name = "nome")
    private String nome;

    @NotNull
    @Column(name = "tempoinicio")
    @Temporal(value = TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "HH:mm")
    @DateTimeFormat(pattern = "HH.mm.ss")
    private Date tempoinicio;

    @NotNull
    @Column(name = "tempofim")
    @Temporal(value = TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "HH:mm")
    @DateTimeFormat(pattern = "HH.mm.ss")
    private Date tempofim;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private EnderecoEntity endereco;

    @JsonIgnoreProperties({"garagem"})
    @OneToMany(mappedBy = "garagem")
    private List<CarroEntity> carro;

}



