import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'accueil', component:AccueilComponent},    
    { path: 'panier', component: PanierComponent },  
    { path: 'produits', component: ProduitsComponent },
    { path: 'produits', component: ProduitDetailComponent },
    { path: 'produit/:id', component: ProduitDetailComponent },  
    { path: 'produits/:id', component: ProduitDetailComponent },
    { path: 'panier', component: PanierComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
