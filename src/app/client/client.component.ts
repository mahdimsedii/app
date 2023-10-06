import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  
  nom = 'mahdi'
  voiture1={
    code:10,
    immat:23456,
    couleur:"rouge",
    marque:"BMW"
  }
  tabProduit=[
    {
      code:23,
      produit:"television"
    },
    {
      code:24,
      produit:"pc lenovo"
    },
    {
      code:25,
      produit:"portable"
    }

  ]
  
  modifierimat() {
    this.voiture1.code=1111111
   
  }
}
