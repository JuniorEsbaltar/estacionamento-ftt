import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GaragemService } from "../../service/garagem.service";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  constructor(private service: GaragemService, private builder: FormBuilder) {}

  @Output() public exibirLista: EventEmitter<string> = new EventEmitter();

  cadastroForm: FormGroup;
  vazio: boolean = false;

  ngOnInit(): void {
    this.criarFormulario();
  }

  public exibirListaGaragem(): void {
    this.exibirLista.emit("lista");
  }

  public criarFormulario(): void {
    this.cadastroForm = this.builder.group({
      nome: [null, Validators.required],
      tempoinicio: [null, Validators.required],
      tempofim: [null, Validators.required],
      endereco: this.builder.group({
        estado: [null, Validators.required],
        cidade: [null, Validators.required],
        rua: [null, Validators.required],
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null, Validators.required],
      }),
    });
  }

  get endereco() {
    return this.cadastroForm.get("endereco");
  }

  //servicos
  public efetuarRegistro(): void {
    if (this.cadastroForm.valid) {
      let resp = this.service.registrarGaragem(this.cadastroForm.value);
      resp.subscribe(() => alert("Cadastrado com sucesso"));
      this.exibirListaGaragem();
    } else {
      this.vazio = true;
    }
  }
}
