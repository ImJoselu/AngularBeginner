// shipping-board.component.ts
import { Component, OnInit } from '@angular/core';
import { startOfISOWeek, addDays, format, getISOWeek, addWeeks } from 'date-fns';
import { DatePipe, NgClass, CommonModule } from '@angular/common';
import { DynamicPopupComponent } from '../dynamic-popup/dynamic-popup.component';

// Define interfaces for type safety
interface Event {
  date: Date;
  description: string;
}

interface DataEntry {
  logoUrl: string;
  name: string;
  quantity: string;
  location: string;
  plannedArrival: string;
  plannedDowntime: string;
  events: Event[];
}

@Component({
  selector: 'app-shipping-board',
  templateUrl: './shipping-board.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    DatePipe,
    DynamicPopupComponent,
  ],
  styleUrls: ['./shipping-board.component.css']
})
export class ShippingBoardComponent implements OnInit {
  currentWeek: number;
  currentDate: Date;
  daysOfWeek: Date[] = [];
  filter: string = 'ALL';
  popupTitle: string = '';
  popupItems: string[] = [];
  showPopup: boolean = false;
  plantTitle: string = 'Ground Floor';  // Título inicial de la planta

  data: DataEntry[] = [
    {
      logoUrl: './assets/images/logos/dacia.png',
      name: 'Customer 1',
      quantity: '100',
      location: 'Location 1',
      plannedArrival: '08:00',
      plannedDowntime: '10:00',
      events: [
        { date: new Date(), description: 'Event 1' },
        { date: addDays(new Date(), 1), description: 'Event 2' }
      ],
    },
    {
      logoUrl: './assets/images/logos/ferrari.png',
      name: 'Customer 2',
      quantity: '50',
      location: 'Location 4',
      plannedArrival: '07:00',
      plannedDowntime: '10:00',
      events: [
        { date: new Date(), description: 'Event 1' },
        { date: addDays(new Date(), 1), description: 'Event 2' }
      ],
    },
    // Agrega más entradas si es necesario...
  ];

  constructor() {
    this.currentDate = new Date();
    this.currentWeek = getISOWeek(this.currentDate);
    this.updateWeekDays();
  }

  ngOnInit() {
    // Lógica adicional al inicializar el componente
  }

  updateWeekDays() {
    const start = startOfISOWeek(this.currentDate);
    this.daysOfWeek = Array.from({ length: 7 }, (_, i) => addDays(start, i));
    console.log('Days of Week:', this.daysOfWeek); // Verifica el contenido del array
  }

  previousWeek() {
    this.currentDate = addWeeks(this.currentDate, -1);
    this.currentWeek = getISOWeek(this.currentDate);
    this.updateWeekDays();
    console.log('Previous Week:', this.daysOfWeek); // Verifica el contenido del array
  }

  nextWeek() {
    this.currentDate = addWeeks(this.currentDate, 1);
    this.currentWeek = getISOWeek(this.currentDate);
    this.updateWeekDays();
    console.log('Next Week:', this.daysOfWeek); // Verifica el contenido del array
  }

  getEventForDay(entry: DataEntry, day: Date): string {
    if (!entry || !entry.events || !Array.isArray(entry.events)) {
      return ''; // Devuelve una cadena vacía si no hay eventos
    }

    const event = entry.events.find(e => format(e.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'));
    return event ? event.description : '';
  }

  openPopup(type: 'plants' | 'languages') {
    this.popupTitle = type === 'plants' ? 'Change Plant' : 'Change Language';
    this.popupItems = type === 'plants' ? ['Ground Floor', 'Humanitarian Floor', 'Logistical Floor', 'IT Floor'] : ['English', 'Spanish', 'French', 'Russian'];
    this.showPopup = true;

    // JLTor: Verifica que los valores se están configurando correctamente
    console.log('Popup Title:', this.popupTitle);
    console.log('Popup Items:', this.popupItems);
  }

  closePopup() {
    this.showPopup = false;
  }

  savePopup(selectedItem: string) {
    if (this.popupTitle.toLowerCase() === 'change plant') {  // Asegúrate de que el título coincide exactamente
      this.plantTitle = selectedItem;  // Actualiza el título de la planta
    }
    this.showPopup = false;
  }
}

