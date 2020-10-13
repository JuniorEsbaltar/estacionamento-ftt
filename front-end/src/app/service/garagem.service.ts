import { GaragemModel } from "../model/garagem.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GaragemService {
  constructor(private http: HttpClient) {}

  public registrarGaragem(garagem: GaragemModel): Observable<GaragemModel> {
    return this.http.post<GaragemModel>(
      "http://localhost:8080/garagem",
      garagem,
      {
        responseType: "text" as "json",
      }
    );
  }

  public buscarPorNome(nome: String): Observable<GaragemModel[]> {
    return this.http.get<GaragemModel[]>(
      "http://localhost:8080/garagem/nome/" + nome
    );
  }

  public buscarTodasGaragem(): Observable<GaragemModel[]> {
    return this.http.get<GaragemModel[]>("http://localhost:8080/garagem/");
  }

  public deletarPeloId(id: number): Observable<GaragemModel> {
    return this.http.delete<GaragemModel>(
      "http://localhost:8080/garagem/" + id
    );
  }

  public buscarPeloId(id: number): Observable<GaragemModel> {
    return this.http.get<GaragemModel>("http://localhost:8080/garagem/" + id);
  }

  public alterarGaragem(garagem: GaragemModel): Observable<GaragemModel> {
    return this.http.put<GaragemModel>(
      "http://localhost:8080/garagem",
      garagem,
      {
        responseType: "text" as "json",
      }
    );
  }
}
