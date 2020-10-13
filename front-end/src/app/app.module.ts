import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagInicialComponent } from "./pag-inicial/pag-inicial.component";
import { ListaGaragemComponent } from "./pag-inicial/lista-garagem/lista-garagem.component";
import { CadastrarComponent } from "./pag-inicial/cadastrar/cadastrar.component";
import { GaragemInfoComponent } from "./garagem-info/garagem-info.component";
import { ListaCarrosComponent } from "./garagem-info/lista-carros/lista-carros.component";
import { CadastraCarroComponent } from "./garagem-info/cadastra-carro/cadastra-carro.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    PagInicialComponent,
    ListaGaragemComponent,
    CadastrarComponent,
    GaragemInfoComponent,
    ListaCarrosComponent,
    CadastraCarroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
