import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  standalone:true,
  styleUrls: ['./produit-detail.component.css'],
  imports:[CommonModule]
})
export class ProduitDetailComponent implements OnInit {

  produit: any;
  consoles = [
    { id: 1, nom: 'PlayStation 5', description: 'Console de dernière génération', imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$', prix: 499 },
    { id: 2, nom: 'Xbox Series X', description: 'Console ultra-puissante', image: '/assets/images/xbox.jpeg', prix: 499 },
    { id: 3, nom: 'Nintendo Switch', description: 'Console hybride', image: '/assets/images/switch.jpeg', prix: 299 }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.produit = this.consoles.find(produit => produit.id === productId);
  }
  

  ajouterAuPanier() {
    console.log('Produit ajouté au panier:', this.produit);
  }
}
