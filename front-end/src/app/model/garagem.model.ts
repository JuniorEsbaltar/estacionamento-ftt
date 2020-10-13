import { Time } from "@angular/common";
import { EnderecoModel } from "./endereco.model";
import { CarroModel } from "./carro.model";

export class GaragemModel {
  id: number;
  nome: string;
  tempoinicio: Time;
  tempofim: Time;
  endereco: EnderecoModel;
  carro: CarroModel;
}
