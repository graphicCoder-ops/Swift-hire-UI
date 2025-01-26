import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports:[RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  // Keyboard shortcuts for navigation
  @HostListener('window:keydown', ['$event'])
  handleKeyboardShortcut(event: KeyboardEvent) {
    if (event.key === '1') {
      this.router.navigate(['/dashboard']);
    } else if ( event.key === '2') {
      this.router.navigate(['/candidates']);
    } else if ( event.key === '3') {
      this.router.navigate(['/jobs']);
    }
  }
}