import { Component, OnInit, ValueProvider } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { Provincia } from 'src/app/model/provincia';
import { PerfilService } from '../../services/perfil.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
angForm: FormGroup;
perfil: Perfil = new Perfil(null,null,null,null,null,null,null);
provincias: Provincia[];
constructor(private fb: FormBuilder,
            private perfilService: PerfilService,
            private router: Router) { 
            this.createForm(this.perfil);
           }
ngOnInit(): void {
  this.perfilService.getProvincias().subscribe(data => {
    this.provincias = data;
  });
}

createForm(perfil: Perfil){
    this.angForm = this.fb.group({
      nombre: [this.perfil.nombre, [Validators.required, Validators.minLength(3)]],
      username: [this.perfil.username],
      genero: [this.perfil.genero, Validators.required],
      edad: [this.perfil.edad, [Validators.required, Validators.min(18)]],
      nombreProvincia: [this.perfil.provincia, Validators.required],
      descripcion:[this.perfil.descripcion]
    });
  }
get nombreProvincia(){
  return this.angForm.get('nombreProvincia');
}
createPerfil() {
this.perfilService.createPerfil(this.perfil)
.subscribe(data=> {alert("Usuario generado de forma correcta");})
}
}