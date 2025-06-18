import { Component } from '@angular/core';  
import { ItemComponent } from '../item/item.component';
import { CommonModule} from "@angular/common";
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
    selector: 'item_list',
    templateUrl: './item_list.component.html',
    styleUrls: ['./item_list.component.css'],
    imports: [CommonModule, ItemComponent]
})
export class ItemListComponent {
    data: Array<{name: string; description?: string; date: Date}>=[{name: 'sample Item', date: new Date()},{name: 'sample Item 2', date: new Date()}, {name: 'Sample Item 3', date: new Date()}];
    
    addItem(name:string, date: Date,description?:string) {
        this.data.push({ 
            name:name, 
            description:description,
            date: date, 
        })
    }

    editItem(index: number, name: string, date: Date, description?: string) {
        this.data[index] = {
            name: name,
            description: description,
            date: date
        };
    }
    deleteItem(index: number) {
        this.data.splice(index, 1);
    }
}