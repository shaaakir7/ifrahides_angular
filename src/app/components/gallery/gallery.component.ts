import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  label: string;
  category: string;
  bg: string;
  texture: string;
  span?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  hoveredItem = signal(-1);
  activeCategory = signal('All');

  categories = ['All', 'Suede', 'Grain', 'Nubuck', 'Goat & Sheep'];

  allItems: GalleryItem[] = [
    { label: 'Tan Suede', category: 'Suede', bg: '#C4956A', texture: '', span: 'col' },
    { label: 'Black Full Grain', category: 'Grain', bg: '#1A1A1A', texture: '' },
    { label: 'Chocolate Suede', category: 'Suede', bg: '#5C3317', texture: '' },
    { label: 'Cognac Grain', category: 'Grain', bg: '#8B5A2B', texture: '', span: 'row' },
    { label: 'Aubergine Suede', category: 'Suede', bg: '#3D1F35', texture: '' },
    { label: 'Camel Nubuck', category: 'Nubuck', bg: '#D4AA7D', texture: '', span: 'col' },
    { label: 'Oxblood', category: 'Grain', bg: '#4A0E0E', texture: '' },
    { label: 'Teal Suede', category: 'Suede', bg: '#2E7D7D', texture: '' },
    { label: 'Fuchsia Suede', category: 'Suede', bg: '#C2185B', texture: '' },
    { label: 'Lavender Goat', category: 'Goat & Sheep', bg: '#7B68A6', texture: '' },
    { label: 'Burgundy Grain', category: 'Grain', bg: '#6B1A2A', texture: '' },
    { label: 'Beige Suede', category: 'Suede', bg: '#D4C5A9', texture: '' },
    { label: 'Plum Suede', category: 'Suede', bg: '#6B3456', texture: '' },
    { label: 'Espresso Grain', category: 'Grain', bg: '#2F1A0D', texture: '' },
    { label: 'Lime Nappa', category: 'Goat & Sheep', bg: '#7CB342', texture: '' },
    { label: 'Deep Red Suede', category: 'Suede', bg: '#8B1A1A', texture: '' },
  ];

  filteredItems = signal(this.allItems);

  leatherTypes = [
    { name: 'Cow Suede / Split Suede', color: '#C4956A' },
    { name: 'Goat Suede', color: '#D4AA7D' },
    { name: 'Cow Full Grain', color: '#5C3317' },
    { name: 'Cow Grain', color: '#8B5A2B' },
    { name: 'Nubuck', color: '#C4A165' },
    { name: 'Buff Calf', color: '#D4C5A9' },
    { name: 'Goat & Sheep', color: '#7B68A6' },
  ];

  setCategory(cat: string) {
    this.activeCategory.set(cat);
    if (cat === 'All') {
      this.filteredItems.set(this.allItems);
    } else {
      this.filteredItems.set(this.allItems.filter(i => i.category === cat));
    }
  }
}
