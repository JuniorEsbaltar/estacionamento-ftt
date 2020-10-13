import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CarroService } from "src/app/service/carro.service";

@Component({
  selector: "app-cadastra-carro",
  templateUrl: "./cadastra-carro.component.html",
  styleUrls: ["./cadastra-carro.component.css"],
})
export class CadastraCarroComponent implements OnInit {
  @Output() public novoCarro: EventEmitter<string> = new EventEmitter();
  constructor(
    private builder: FormBuilder,
    private router: ActivatedRoute,
    private service: CarroService
  ) {}

  carroForm: FormGroup;
  vazio: boolean = false;

  public idgaragem: number;

  ngOnInit(): void {
    this.idgaragem = this.router.snapshot.params["id"];
    this.criarFormulario();
  }

  public criarFormulario() {
    this.carroForm = this.builder.group({
      placa: [null, Validators.required],
      quilometragem: [null, Validators.required],
      anodefabricacao: [null, Validators.required],
      modelo: [null, Validators.required],
      cor: [null, Validators.required],
      valor: [null, Validators.required],
      descricao: [null, Validators.required],
      garagem: [{ id: this.idgaragem }],
    });
  }

  public cadastrarCarro() {
    if (this.carroForm.valid) {
      let resp = this.service.registrarCarro(this.carroForm.value);
      resp.subscribe(
        () => alert("Registrado com sucesso"),
        () => alert("Erro ao cadastrar"),
        () => this.voltarPagina()
      );
    } else {
      this.vazio = true;
    }
  }
  public voltarPagina() {
    this.novoCarro.emit("listarCarros");
  }
}
