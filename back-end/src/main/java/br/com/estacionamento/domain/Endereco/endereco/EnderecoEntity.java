package br.com.estacionamento.domain.Endereco.endereco;

import br.com.estacionamento.domain.Garagem.garagem.GaragemEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Entity
@Table(name="endereco")
public class EnderecoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @NotNull
    @NotBlank
    @Column(name="estado")
    private String Estado;

    @NotNull
    @NotBlank
    @Column(name="cidade")
    private String Cidade;

    @NotNull
    @NotBlank
    @Column(name="rua")
    private String Rua;

    @NotNull
    @NotBlank
    @Column(name="numero")
    private String Numero;

    @NotNull
    @NotBlank
    @Column(name="complemento")
    private String Complemento;

    @NotNull
    @Column(name="cep")
    private int Cep;

    @JsonIgnore
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "endereco")
    private GaragemEntity garagem;


}
