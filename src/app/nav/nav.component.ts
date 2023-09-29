import { Component } from '@angular/core';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  faHotel = faHotel;
  faChevronDown = faChevronDown;
  faSliders = faSliders;
  faCalendarDay = faCalendarDay;
}
