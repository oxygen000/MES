import { Component } from '@angular/core';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  
})

export class DashboardComponent {
  faSliders = faSliders;
  faRoute = faRoute;
}
