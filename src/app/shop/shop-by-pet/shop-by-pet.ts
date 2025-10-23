import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-by-pet',
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-by-pet.html',
  styles: ``
})
export class ShopByPet {
  
  pets : { name: string, image: string }[] = [
    { name: 'Cat', image: 'images/cat.png' },
    { name: 'Dog', image: 'images/dog.png' },
    { name: 'Hamster', image: 'images/hamster.png' },
    { name: 'Parrot', image: 'images/parrot.png' },
    { name: 'Rabbit', image: 'images/rabbit.png' },
    { name: 'Turtle', image: 'images/turtle.png' }
  ]



}
