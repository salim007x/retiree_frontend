import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toastify',
  standalone: true,
  templateUrl: './toastify.component.html',
  styleUrls: ['./toastify.component.css'],
  imports: [CommonModule],
})
export class ToastifyComponent implements OnInit {
  data!: string;
  showToast: boolean = false;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toastState.subscribe((message) => {
      this.data = message;
      this.showToast = true;

      setTimeout(() => {
        this.showToast = false; // Start fade-out
      }, 3000); // Display toast for 3 seconds

      // Remove from DOM completely after fade-out transition
      setTimeout(() => {
        this.data = '';
      }, 3500);
    });
  }

  closeToast(): void {
    this.showToast = false;
  }
}
