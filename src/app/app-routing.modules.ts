
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component'; 
import { ProduitsComponent } from './produits/produits.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },    
  { path: 'panier', component: PanierComponent },  
  { path: 'produit', component: ProduitsComponent },
  { path: 'produit/:id', component: ProduitDetailComponent },  
  { path: 'produits/:id', component: ProduitDetailComponent },
  { path: 'panier', component: PanierComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
