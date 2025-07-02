import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';
import item_interface from '../../interfaces/Itodo';

@Component({
  selector: 'item_list',
  templateUrl: './item_list.component.html',
  styleUrls: ['./item_list.component.css'],
  imports: [CommonModule, ItemComponent],
})
export class ItemListComponent {
  @Output() deleteitem = new EventEmitter<number>();
  @Output() edititemevent = new EventEmitter<item_interface>();
  deleteItem(index: number) {
    this.deleteitem.emit(index);
  }
  @Input()
  data: Array<{ name: string; description?: string; date: Date ,done?: boolean}> = [
    { name: 'sample Item', date: new Date() },
    { name: 'sample Item 2', date: new Date() },
    { name: 'Sample Item 3', date: new Date() },
  ];

  addItem(name: string, date: Date, description?: string) {
    this.data.push({
      name: name,
      description: description,
      date: date,
    });
  }

  editItem(index: number, name: string, date: Date, description?: string) {
    this.data[index] = {
      name: name,
      description: description,
      date: date,
    };
  }
  action_handler(event: item_interface) {
    if (event.action === 'edit') {
      this.edititemevent.emit(event);
    }
    if (event.action === 'delete') {
    }
  }
  doneItem(index: number) {
    const item = this.data[index];
    if (item) {
      item.done = true;
    }
  }
}
