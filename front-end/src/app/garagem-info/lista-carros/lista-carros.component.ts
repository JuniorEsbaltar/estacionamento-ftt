import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { CarroModel } from "../../model/carro.model";

import { GaragemService } from "src/app/service/garagem.service";
import { GaragemModel } from "src/app/model/garagem.model";
import { ActivatedRoute } from "@angular/router";
import { CarroService } from "src/app/service/carro.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-lista-carros",
  templateUrl: "./lista-carros.component.html",
  styleUrls: ["./lista-carros.component.css"],
})
export class ListaCarrosComponent implements OnInit {
  @Output() public novoCarro: EventEmitter<string> = new EventEmitter();
  constructor(
    private service: GaragemService,
    private router: ActivatedRoute,
    private serviceCarro: CarroService,
    private builder: FormBuilder
  ) {}

  garagem: GaragemModel;
  carro: CarroModel;
  carroForm: FormGroup;
  idgaragem: number;
  idfordelete: number;
  vazio: boolean = false;
  pag: number = 1;
  contador: number = 8;

  ngOnInit(): void {
    this.idgaragem = this.router.snapshot.params["id"];
    this.buscarPeloId();
    this.criarFormularioCarro();
  }

  public reloadPage() {
    window.location.reload();
  }
  //Alterar pagina.
  public cadastrar(): void {
    this.novoCarro.emit("cadastra");
  }

  //Salvando id para ser deletado

  public carroIdDelete(id: number): void {
    this.idfordelete = id;
  }

  //FormModal
  public criarFormularioCarro() {
    this.carroForm = this.builder.group({
      id: [null, Validators.required],
      placa: [null, Validators.required],
      quilometragem: [null, Validators.required],
      cor: [null, Validators.required],
      valor: [null, Validators.required],
      anodefabricacao: [null, Validators.required],
      modelo: [null, Validators.required],
      descricao: [null, Validators.required],
      garagem: [{ id: this.idgaragem }],
    });
  }

  //Services:
  public buscarCarroPeloid(id: number): void {
    let resp = this.serviceCarro.buscarPeloId(id);
    resp.subscribe(
      (data) => (this.carro = data),
      () => alert("Erro ao buscar o carro"),
      () => this.carroForm.patchValue(this.carro)
    );
  }

  public buscarPeloId(): void {
    let resp = this.service.buscarPeloId(this.idgaragem);
    resp.subscribe((data) => (this.garagem = data));
  }

  public deleteById(id: number): void {
    let resp = this.serviceCarro.deletePeloId(id);
    resp.subscribe(() => this.reloadPage());
  }

  public alterarDados(): void {
    if (this.carroForm.valid) {
      let resp = this.serviceCarro.alterarCarro(this.carroForm.value);
      resp.subscribe(
        () => alert("Alterado com sucesso"),
        () => alert("erro"),
        () => this.reloadPage()
      );
    } else {
      this.vazio = true;
    }
  }
}
