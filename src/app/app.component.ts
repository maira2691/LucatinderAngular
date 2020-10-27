import { Component } from '@angular/core';
import { PerfilService } from './services/perfil.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PerfilService]
})
export class AppComponent {
  title = 'Lucatinder-Angular';

  constructor(private perfilService:PerfilService) {}
}
