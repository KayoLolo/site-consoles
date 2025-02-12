import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface Produit {
  id: number;
  nom: string;
  image: string;
  prix: number;
  quantite: number; 
}

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class PanierComponent implements OnInit {

  panier: Produit[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.panier = [
      { id: 1, nom: 'PlayStation 5', image: '/assets/images/ps5.jpeg', prix: 499, quantite: 1 },
      { id: 2, nom: 'Xbox Series X', image: '/assets/images/xbox.jpeg', prix: 499, quantite: 2 },
      { id: 3, nom: 'Nintendo Switch', image: '/assets/images/switch.jpeg', prix: 299, quantite: 1 }
    ];
  }

  // Méthode pour supprimer un produit du panier
  supprimerDuPanier(id: number): void {
    this.panier = this.panier.filter(produit => produit.id !== id);
  }

  totalPanier(): number {
    return this.panier.reduce((total, produit) => total + produit.prix * produit.quantite, 0);
  }
  
}
