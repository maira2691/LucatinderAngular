import { Component, OnInit } from '@angular/core';

import { PerfilService  } from "../../services/perfil.service";
import { Perfil } from '../../model/perfil';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  providers: [PerfilService]
})

export class ContactosComponent implements OnInit {

  contactos: Perfil[];
  idPropietario:Number;

  constructor(private route: ActivatedRoute, private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPropietario = +params['id'];
    });
    this.perfilService.getContactos(this.idPropietario).subscribe(data => {
      this.contactos = data;
    });
  }

}

