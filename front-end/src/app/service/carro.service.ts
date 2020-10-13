import { HttpClient } from "@angular/common/http";
import { CarroModel } from "../model/carro.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CarroService {
  constructor(private http: HttpClient) {}

  public registrarCarro(carro: CarroModel): Observable<CarroModel> {
    return this.http.post<CarroModel>("http://localhost:8080/carro", carro, {
      responseType: "text" as "json",
    });
  }

  public listaCarros(): Observable<CarroModel[]> {
    return this.http.get<CarroModel[]>("http://localhost:8080/carro");
  }

  public buscarPeloId(id: number): Observable<CarroModel> {
    return this.http.get<CarroModel>("http://localhost:8080/carro/" + id);
  }

  public deletePeloId(id: number): Observable<CarroModel> {
    console.log("serivce id", id);
    return this.http.delete<CarroModel>("http://localhost:8080/carro/" + id);
  }

  public alterarCarro(carro: CarroModel): Observable<CarroModel> {
    return this.http.put<CarroModel>("http://localhost:8080/carro", carro, {
      responseType: "text" as "json",
    });
  }
}
