import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-dash-board",
  templateUrl: "./dash-board.component.html",
  styleUrls: ["./dash-board.component.css"],
  imports: [CommonModule]
})
export class DashBoardComponent {
  // Component logic goes here
  cards = [
    { title: 'Users', description: '1,204 active users' },
    { title: 'Sales', description: '$24,500 this month' },
    { title: 'Performance', description: '87% efficiency' },
    { title: 'Tasks', description: '12 tasks remaining' }
  ];
}
