import { Component } from '@angular/core';
import { LineComponentComponent } from '../line-component/line-component.component';
@Component({
  selector: 'app-dashboard',
  imports: [LineComponentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
