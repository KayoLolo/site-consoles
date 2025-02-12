import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-accueil',
  standalone:true,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  imports:[RouterLink, CommonModule]
})
export class AccueilComponent implements OnInit {

  consoles = [
    { id: 1, nom: 'PlayStation 5', image: 'https://images.frandroid.com/wp-content/uploads/2023/11/ps5-slim-design-scaled.jpg', prix: 499 },
    { id: 2, nom: 'Xbox Series X', image: 'https://imagedelivery.net/JAV112JY973Crznn4xb8Sg/2cc5cb81-61a0-42d9-322b-de11c9b8c000/public', prix: 499 },
    { id: 3, nom: 'Nintendo Switch', image: 'https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/0045496453596_1.jpg', prix: 299 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
