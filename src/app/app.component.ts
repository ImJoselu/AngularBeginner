
import {FooterComponent} from "./footer/footer.component";
import {HotelCardComponent} from "./hotel-card/hotel-card.component";
import {NavbarComponent} from "./navbar/navbar.component";
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule


import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, RouterOutlet} from '@angular/router';
import { filter } from 'rxjs/operators';
import {LoginComponent} from "./login/login.component";
import {ShippingBoardComponent} from "./shipping-board/shipping-board.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FooterComponent,
    LoginComponent,
    ShippingBoardComponent,
    HotelCardComponent,
    NavbarComponent,
    RouterOutlet,
    CommonModule
  ],
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  hotels = [
    {
      nombre: 'Belmond Copacabana Palace',
      descripcion: 'Un icónico hotel de lujo en la playa de Copacabana, conocido por su elegancia y vistas panorámicas del océano.',
      location: 'Rio de Janeiro, Brasil',
      imageURL: 'https://www.kayak.com.br/rimg/himg/9e/40/39/ice-173128076-70754024_3XL-377444.jpg?width=968&height=607&crop=true',
      ranking: 4.8
    },{
      nombre: 'Hotel Savoy',
      descripcion: 'Un elegante hotel en el corazón de Londres, famoso por su servicio impecable y su arquitectura clásica.',
      location: 'Londres, Gran Bretaña',
      imageURL: 'https://media.istockphoto.com/id/1347240950/es/foto/entrada-del-hotel-savoy-en-the-strand-londres-reino-unido.jpg?s=612x612&w=0&k=20&c=s9NLdkLvfX9LVCb6CXEcLLh6ME5NlEuKdUioIjspv-4=',
      ranking: 5
    },{
      nombre: 'Hotel Ritz',
      descripcion: 'Un símbolo de lujo y sofisticación en París, con habitaciones opulentas y un servicio excepcional.',
      location: 'París, Francia',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/H%C3%B4tel_Ritz.jpg',
      ranking: 5
    },{
      nombre: 'Grand Hotel Europa',
      descripcion: 'Un majestuoso hotel en San Petersburgo, conocido por su espléndido diseño arquitectónico y su historia rica.',
      location: 'San Petersburgo, Rusia',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Prag_HoteL_Europa_Meran.JPG',
      ranking: 4.2
    },{
      nombre: 'El Palace',
      descripcion: ' Un hotel de lujo en Barcelona, famoso por su elegante diseño y rica historia, ofreciendo una experiencia majestuosa.',
      location: 'Barcelona, España',
      imageURL: 'https://static-new.lhw.com/HotelImages/Final/LW1401/lw1401_128953575_720x450.jpg',
      ranking: 5
    },


  ];

  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
      console.log('Current route:', this.currentRoute); // Verifica la ruta actual
    });
  }

  get hotelCount(): number {
    return this.hotels.length;
  }
}
