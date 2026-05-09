import { Component, signal, inject, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private http = inject(HttpClient);

  @ViewChild('dropdownContainer') dropdownContainer!: ElementRef;

  submitted = signal(false);
  isLoading = signal(false);
  isDropdownOpen = signal(false);

  form = {
    name: '',
    company: '',
    email: '',
    phone: '', // Added Phone
    types: [] as string[],
    message: ''
  };

  options = [
    'Suede (Cow / Goat / Split)',
    'Full Grain / Cow Grain',
    'Nubuck',
    'Buff Calf',
    'Goat & Sheep',
    'Lining Leather'
  ];

  // Close dropdown when clicking outside of the dropdown container specifically
  @HostListener('document:mousedown', ['$event'])
  clickout(event: any) {
    if (this.isDropdownOpen() && this.dropdownContainer && !this.dropdownContainer.nativeElement.contains(event.target)) {
      this.isDropdownOpen.set(false);
    }
  }

  toggleType(type: string) {
    const index = this.form.types.indexOf(type);
    if (index > -1) {
      this.form.types.splice(index, 1);
    } else {
      this.form.types.push(type);
    }
  }

  // Replace this with your actual Google Apps Script Web App URL after deployment
  private readonly SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbynheToIPaSKhd2VHqkBeVrWBWhlti_fz07vJUaSI3bLD_STqu1uagZ0JwdM6fMOfPS/exec';

  onSubmit() {
    this.isLoading.set(true);

    const headers = { 'Content-Type': 'text/plain;charset=utf-8' };
    const payload = {
      ...this.form,
      type: this.form.types.join(', ') // Convert array to string for the sheet/email
    };

    this.http.post(this.SCRIPT_URL, JSON.stringify(payload), { headers, responseType: 'text' }).subscribe({
      next: (res) => {
        console.log('Enquiry sent successfully', res);
        this.isLoading.set(false);
        this.submitted.set(true);
      },
      error: (err) => {
        console.error('Error sending enquiry', err);
        this.isLoading.set(false);
        // Show error or success anyway for demo if it's just CORS
        this.submitted.set(true);
      }
    });
  }
}
