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
    { id: 1, nom: 'PlayStation 5', image: 'https://images.frandroid.com/wp-content/uploads/2023/11/ps5-slim-design-scaled.jpg', prix: 499 },
    { id: 2, nom: 'Xbox Series X', image: 'https://imagedelivery.net/JAV112JY973Crznn4xb8Sg/2cc5cb81-61a0-42d9-322b-de11c9b8c000/public', prix: 499 },
    { id: 3, nom: 'Nintendo Switch', image: 'https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/0045496453596_1.jpg', prix: 299 }
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
