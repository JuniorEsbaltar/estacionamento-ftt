import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GaragemService } from "../service/garagem.service";
import { GaragemModel } from "../model/garagem.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-garagem-info",
  templateUrl: "./garagem-info.component.html",
  styleUrls: ["./garagem-info.component.css"],
})
export class GaragemInfoComponent implements OnInit {
  constructor(
    public router: ActivatedRoute,
    private service: GaragemService,
    private builder: FormBuilder
  ) {}

  public cadastra: boolean = false;

  id: number;
  garagem: GaragemModel;
  mensagem: any;
  editmode: boolean = false;
  vazio: boolean = false;

  cadastroForm: FormGroup;
  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];
    this.infomacaoGaragem();
    this.criarFormulario();
    this.cadastroForm.disable();
  }

  visible: number = 0;

  public enableGroup() {
    if (this.visible === 0) {
      this.cadastroForm.enable();
      this.visible = 1;
      this.editmode = true;
    } else {
      this.cadastroForm.disable();
      this.visible = 0;
      this.editmode = false;
    }
  }

  public refresh(): void {
    window.location.reload();
  }

  public novoCarro(event: string) {
    this.cadastra = event === "cadastra" ? true : false;
  }

  public criarFormulario() {
    this.cadastroForm = this.builder.group({
      id: [null, Validators.required],
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
  public populaModal() {
    this.cadastroForm.patchValue(this.garagem);
  }

  //servicos
  public infomacaoGaragem(): void {
    let resp = this.service.buscarPeloId(this.id);
    resp.subscribe((data) => (this.garagem = data));
  }

  public alterarDados() {
    if (this.cadastroForm.valid) {
      let resp = this.service.alterarGaragem(this.cadastroForm.value);
      resp.subscribe((data) => (this.mensagem = data));
      this.refresh();
    } else {
      this.vazio = true;
    }
  }
}
