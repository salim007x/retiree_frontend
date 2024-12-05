import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { ToastifyComponent } from "./shared/components/toastify/toastify.component";
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { LoaderService } from './shared/services/loader.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastifyComponent, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private loaderService: LoaderService, private cd: ChangeDetectorRef) {
  }


  isLoading:boolean = false;
  
  ngOnInit() {
    // Initialize AOS
    AOS.init({});

    this.loaderService.loading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
      this.cd.detectChanges();
    });
  }
}
