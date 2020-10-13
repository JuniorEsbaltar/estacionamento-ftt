import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pag-inicial",
  templateUrl: "./pag-inicial.component.html",
  styleUrls: ["./pag-inicial.component.css"],
})
export class PagInicialComponent implements OnInit {
  constructor() {}

  public cadastro: boolean = false;
  ngOnInit(): void {}

  public exibirLista(event: string) {
    this.cadastro = event === "cadastro" ? true : false;
  }
}
