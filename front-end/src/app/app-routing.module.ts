import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagInicialComponent } from "./pag-inicial/pag-inicial.component";
import { GaragemInfoComponent } from "./garagem-info/garagem-info.component";

const routes: Routes = [
  { path: "", redirectTo: "inicial", pathMatch: "full" },
  { path: "inicial", component: PagInicialComponent },
  { path: "garagem", component: GaragemInfoComponent },
  { path: "garagem/:id", component: GaragemInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
