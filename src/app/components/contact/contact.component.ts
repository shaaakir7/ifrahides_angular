import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  submitted = signal(false);
  form = { name: '', company: '', email: '', type: '', message: '' };

  onSubmit() {
    // In production, wire to a backend / formspree
    this.submitted.set(true);
  }
}
