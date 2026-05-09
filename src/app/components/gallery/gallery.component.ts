import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface GalleryItem {
  label: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  private http = inject(HttpClient);

  // State Signals
  allItems = signal<GalleryItem[]>([]);
  filteredItems = signal<GalleryItem[]>([]);
  activeCategory = signal('All');
  hoveredItem = signal(-1);

  // Lightbox Signals
  isModalOpen = signal(false);
  currentIndex = signal(0);

  categories = signal<string[]>(['All']);

  private readonly SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbysW8z2c1zpTmwI2i1MxnUsWZExQIcy55u_qBNmQ2vX0v3Br9jfiQYwQUGreooXMQkR/exec';

  ngOnInit() {
    this.fetchGallery();
  }

  fetchGallery() {
    this.http.get<GalleryItem[]>(this.SCRIPT_URL).subscribe({
      next: (data) => {
        this.allItems.set(data);
        this.filteredItems.set(data);
        
        // Dynamically extract unique categories from the data
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        this.categories.set(['All', ...uniqueCategories]);
      },
      error: (err) => {
        console.error('Gallery Fetch Error:', err);
      }
    });
  }

  setCategory(cat: string) {
    this.activeCategory.set(cat);
    if (cat === 'All') {
      this.filteredItems.set(this.allItems());
    } else {
      this.filteredItems.set(this.allItems().filter(i => i.category === cat));
    }
  }

  openLightbox(index: number) {
    this.currentIndex.set(index);
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.isModalOpen.set(false);
    document.body.style.overflow = 'auto';
  }

  nextImage(event?: Event) {
    event?.stopPropagation();
    const next = (this.currentIndex() + 1) % this.filteredItems().length;
    this.currentIndex.set(next);
  }

  prevImage(event?: Event) {
    event?.stopPropagation();
    const prev = (this.currentIndex() - 1 + this.filteredItems().length) % this.filteredItems().length;
    this.currentIndex.set(prev);
  }
}
