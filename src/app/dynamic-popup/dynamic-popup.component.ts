import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-popup',
  templateUrl: './dynamic-popup.component.html',
  styleUrls: ['./dynamic-popup.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DynamicPopupComponent {
  @Input() title: string = '';
  @Input() items: string[] = [];
  @Output() save = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  selectedItem: string | null = null;

  onSave() {
    if (this.selectedItem) {
      this.save.emit(this.selectedItem); // Emite el ítem seleccionado al hacer clic en Save
    }
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
