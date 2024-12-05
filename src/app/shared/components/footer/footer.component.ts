import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  
  constructor(private cdr: ChangeDetectorRef) {}

  currentYear: any;

  ngOnInit() : void {
    this.currentYear = new Date().getFullYear();
  }

  

  // scroll to top
  scrollToTop(): void {
    const element = document.getElementById('top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.cdr.detectChanges();
    }
  }

}
