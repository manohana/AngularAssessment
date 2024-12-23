import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-career-page',
  imports: [],
  templateUrl: './career-page.component.html',
  styleUrl: './career-page.component.scss'
})
export class CareerPageComponent {
   constructor(private router: Router) {}
  
    navigateToCareers() {
      this.router.navigate(['/loan-login']);
    }
}
