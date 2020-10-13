import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { GaragemService } from "../../service/garagem.service";
import { GaragemModel } from "src/app/model/garagem.model";

@Component({
  selector: "app-lista-garagem",
  templateUrl: "./lista-garagem.component.html",
  styleUrls: ["./lista-garagem.component.css"],
})
export class ListaGaragemComponent implements OnInit {
  constructor(private service: GaragemService) {}

  //Variaveis.
  garagems: GaragemModel[];
  nome: string;
  idfordelete: number = null;
  listaAux: GaragemModel[];
  vazio: boolean = false;

  @Output() public exibirLista: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.listaGaragem();
  }

  public exibirCadastraGaragem(): void {
    this.exibirLista.emit("cadastro");
  }

  //Gravar o id que será deletado.
  public setIdForDelete(id: number): void {
    this.idfordelete = id;
  }

  /*Para voltar a lista quando o campo de pesquisa estiver vazio
  Utilizei uma variavel auxiliar para não precisar consulta o banco novamente.*/
  public pesquisa(termoDaBusca: string): void {
    if (termoDaBusca == "") {
      this.garagems = this.listaAux;
    }
  }

  // services:
  public buscarGaragemPorNome() {
    let resp = this.service.buscarPorNome(this.nome);
    resp.subscribe((data) => (this.garagems = data));
  }

  public listaGaragem(): void {
    let resp = this.service.buscarTodasGaragem();
    resp.subscribe(
      (data) => (this.garagems = data),
      () => alert("Erro ao ser deletado."),
      () => (this.listaAux = this.garagems)
    );
  }

  public deleteById(id: number) {
    let resp = this.service.deletarPeloId(id);
    resp.subscribe(
      () => alert("Deletado com sucesso."),
      () => (this.vazio = true),
      () => window.location.reload()
    );
  }
}
