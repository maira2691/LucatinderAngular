import { Component, OnInit, Input } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { ActivatedRoute } from '@angular/router';
import { Perfil } from 'src/app/model/perfil'

@Component({
  selector: 'app-descartes',
  templateUrl: './descartes.component.html',
  styleUrls: ['./descartes.component.css']
})
export class DescartesComponent implements OnInit {

  idPropietario:Number;
  listaDescartes:Perfil[];

  constructor(private perfilService:PerfilService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPropietario = +params['id'];
    });
    this.perfilService.getDescartes(this.idPropietario).subscribe(data => {
      this.listaDescartes = data;
    });
  }

}
