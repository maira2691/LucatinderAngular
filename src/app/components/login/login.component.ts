import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';
import { Perfil } from '../../model/perfil';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:String;

  constructor(private perfilService: PerfilService, 
            private router:Router,
            private route:ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.perfilService.findByUsername(this.userName).subscribe((result) => {
      localStorage.setItem('perfil',JSON.stringify(result))
      this.goToHome(+result.id)
    }
    );
  }

  goToHome(id:Number): void {
    this.router.navigate(['/home',id]);
  }

}

