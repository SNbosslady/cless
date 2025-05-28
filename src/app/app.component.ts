import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { footerComponent} from '../components/footer/footer.component';  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,footerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cless';
}
