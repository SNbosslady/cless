import{Component} from '@angular/core';
import { ItemListComponent } from '../item_list/item_list.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-body',
    imports: [ItemListComponent,SearchBarComponent,CommonModule],
    templateUrl: './body.component.html',
    styleUrl: './body.component.css'
})
export class BodyComponent {
data: Array<{name: string; description?: string; date: Date,id?:any }> = [{name: 'Sample Item', description:'item number 1 data', date: new Date(), id:0},{name: 'Sample Item 2', date: new Date()}, {name: 'Sample Item 3', date: new Date()},{name: 'Sample Item 4', date: new Date()}];

addNewItem(event: any) {console.log('Adding new item', event);
  this.data.push({ name: event, date: new Date() });
    // Here you can implement the logic to add the new item to your list
  }
  delete(index:any){
  //alert(`Deleting item at index(s) $(index)`);
  this.data = this.data.filter((item, item_index)=>{
    console.log(item)
    if(item_index===index as number){
      return false
    }
    return true
  })
}
}

