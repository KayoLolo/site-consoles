import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  standalone:true,
  imports:[CommonModule, RouterLink]
})
export class ProduitsComponent implements OnInit {
  produitId: number | null = null;

  consoles = [
    { id: 1, nom: 'PlayStation 5', description: 'Console de dernière génération', imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$', prix: 499 },
    { id: 2, nom: 'Xbox Series X', description: 'Console ultra-puissante', image: '/assets/images/xbox.jpeg', prix: 499 },
    { id: 3, nom: 'Nintendo Switch', description: 'Console hybride', image: '/assets/images/switch.jpeg', prix: 299 }
  ];


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      if (id !== null) {
        this.produitId = +id;  
        console.log(this.produitId); 
      } else {
        console.error('ID du produit manquant!');
      }
    });
  }
}
