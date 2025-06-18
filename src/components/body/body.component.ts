import{Component} from '@angular/core';
import { ItemListComponent } from '../item_list/item_list.component';

@Component({
    selector: 'app-body',
    imports: [ItemListComponent],
    templateUrl: './body.component.html',
    styleUrl: './body.component.css'
})
export class BodyComponent {
}
