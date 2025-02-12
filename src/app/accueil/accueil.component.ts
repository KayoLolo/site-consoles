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
    { id: 1, nom: 'PlayStation 5', imageUrl: 'https://images.frandroid.com/wp-content/uploads/2023/11/ps5-slim-design-scaled.jpg', prix: 499 },
    { id: 2, nom: 'Xbox Series X', image: '../assets/images/xbox.jpeg', prix: 499 },
    { id: 3, nom: 'Nintendo Switch', image: '../assets/images/ps5.jpeg', prix: 299 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
