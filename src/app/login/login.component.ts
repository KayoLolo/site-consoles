import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports:[FormsModule],
  standalone:true,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginMessage: string | null = null;

  // Valeurs "en dur" pour tester l'authentification
  private validEmail = 'user@example.com';
  private validPassword = 'root';

  constructor(private router:Router){}

  onSubmit() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      this.loginMessage = null;
      alert('Connexion réussie!');

      this.router.navigate(['/accueil']); 
    } else {
      this.loginMessage = 'Identifiants incorrects. Veuillez réessayer.';
    }
  }
}
