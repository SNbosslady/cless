import { Component, EventEmitter , Output} from '@angular/core';
// import { NgModel } from '@angular/forms';
@Component({
  selector: 'search-bar',
  imports:[],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchTerm:string = '';

  displaySearchForm: boolean = false;
  displayAddForm: boolean = true;

  @Output() newitem = new EventEmitter<string>();

  onAdd(event: any) {
    this.searchTerm = event.target.value;
    console.log('Search term:', this.searchTerm);
  }
  
  addItem() {
    console.log('Search term:', this.searchTerm);
    this.newitem.emit(this.searchTerm);
    this.searchTerm = '';
  }

  save(event: any){
    event.preventDefault();
    console.log('Search term:', 'searchTerm');
  }
}
