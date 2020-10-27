import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PerfilService  } from "../../services/perfil.service";
import { Perfil } from '../../model/perfil';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css'],
  providers: [PerfilService]
})

export class SugerenciasComponent implements OnInit {
  
  sugerencias:Perfil[];
  idPropietario: Number;

  constructor(private route: ActivatedRoute,private perfilService: PerfilService) { }
  
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPropietario = +params['id'];
    });
    this.perfilService. getSugerencias(this.idPropietario).
    subscribe(data => {
      this.sugerencias = data;
      console.log(this.sugerencias)
  });
} 
  descartar(perfil:Perfil): void {
    this.perfilService.descartarSugerencia(this.idPropietario,perfil).
    subscribe(data =>{
      var newSugerencias = [];
      for(let i:number = 0; i<this.sugerencias.length; i++){
        if (this.sugerencias[i] != perfil)
          newSugerencias.push(this.sugerencias[i]);
      }
      this.sugerencias = newSugerencias;
    });
    console.log(this.sugerencias);
  }

  aceptar(perfil:Perfil): void {
    this.perfilService.aceptarSugerencia(this.idPropietario,perfil).
    subscribe(data =>{
      var newSugerencias = [];
      for(let i:number = 0; i<this.sugerencias.length; i++){
        if (this.sugerencias[i].id != perfil.id)
          newSugerencias.push(this.sugerencias[i]);
      }
      this.sugerencias = newSugerencias;
    });
    console.log(this.sugerencias);
  }

}





  