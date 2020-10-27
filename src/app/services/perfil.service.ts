import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Perfil } from '../model/perfil';
import { Provincia } from '../model/provincia';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PerfilService {

  constructor(private http:HttpClient) {}

  private perfilUrl = 'http://localhost:8080/rperfil';
  
  public getSugerencias(id:any) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/sugerencias/" + id);
  }

  public getContactos(id:Number) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaContactos/" + id);
  }

  public getDescartes(id:Number) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaDescartes/" + id);
  }
  public getMatches(id:Number) {
    return this.http.get<Perfil[]>(this.perfilUrl + "/listaMatches/" + id);
  }

  public getProvincias() {
    return this.http.get<Provincia[]>(this.perfilUrl + "/provincias");
  }

  public deletePerfil(perfil:Perfil) {
    return this.http.delete(this.perfilUrl + "/"+ perfil.id);
  }

  public createPerfil(perfil:Perfil){
    return this.http.post<Perfil>(this.perfilUrl + "/add", perfil);
  }

  public findByUsername(username:String){
    return this.http.get<Perfil>(this.perfilUrl + "/" + username);
  }

  public findOne(id:Number){
    return this.http.get<Perfil>(this.perfilUrl + "/one/" + id);
  }

  public descartarSugerencia(idPropietario:Number, sugerencia:Perfil) {
    return this.http.post<Perfil>(this.perfilUrl.concat("/descartarSugerencia/".concat(String(idPropietario))), sugerencia, httpOptions);
  }

  public aceptarSugerencia(idPropietario:Number, sugerencia:Perfil) {
    return this.http.post<Perfil>(this.perfilUrl.concat("/aceptarSugerencia/".concat(String(idPropietario))), sugerencia, httpOptions);
  }

}
