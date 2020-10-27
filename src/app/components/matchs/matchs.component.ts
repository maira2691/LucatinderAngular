import { Component, OnInit } from '@angular/core';

import { PerfilService  } from "../../services/perfil.service";
import { Perfil } from '../../model/perfil';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css'],
  providers: [PerfilService]
})
export class MatchsComponent implements OnInit {

  matches: Perfil[];
  idPropietario: Number;

  constructor(private route: ActivatedRoute, private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPropietario = +params['id'];
    });
    this.perfilService.getMatches(this.idPropietario).subscribe(data => {
      this.matches = data;
    });
  }
}