import { Component } from '@angular/core';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faCodeCompare = faCodeCompare;
  faTriangleExclamation = faTriangleExclamation;
  faWrench = faWrench;
}
