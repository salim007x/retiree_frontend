import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  // to determine logged in users and hide login button
  isLoggedIn: boolean = false;

  // to get the name of user logged on
  name: string = '';

  ngOnInit(): void {
    // Check if token exists in local storage
    if(localStorage.getItem('retiree_token')) {
      this.isLoggedIn = true;
      // Retrieve surname from local storage
      this.name = localStorage.getItem('surname') || '';
    }
  }


// logouut
  logout() {
    // Clear local storage
    localStorage.removeItem('retiree_token');
    localStorage.removeItem('surname');
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirect to login page
  }
  

}
