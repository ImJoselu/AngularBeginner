import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HotelCardComponent {
  private _hotel: {
    nombre: string;
    descripcion: string;
    location: string;
    imageURL: string;
  } = {
    nombre: '',
    descripcion: '',
    location: '',
    imageURL: ''
  };

  @Input()
  set hotel(value: {
    nombre: string;
    descripcion: string;
    location: string;
    imageURL: string;
  }) {
    this._hotel = value;
  }

  get hotel() {
    return this._hotel;
  }
}
