import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  years: string;
  role: string;
  company: string;
  desc: string;
  active?: boolean;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  items: TimelineItem[] = [
    {
      years: '2013 – 2014',
      role: 'Product Development',
      company: 'Bachi Shoes',
      desc: "Led children's footwear development for Kickers and Clarks. Managed prototypes through to salesman samples for seasonal launches."
    },
    {
      years: '2014 – 2021',
      role: 'Merchandising, Development & QC',
      company: 'Pioneer Leder Tex Pvt. Ltd.',
      desc: 'Seven years at an established finished leather tannery. Managed article development and quality control for major European accounts — Sanchez Agulo, Almansa Cuero Piel, Simaca, Lajara, San Martin, and others.'
    },
    {
      years: '2021',
      role: 'Founded Ifra Hides',
      company: 'Ifra Hides · Inception',
      desc: 'Established Ifra Hides as a dedicated leather sourcing agency. Immediately secured Bruno Premi (Italy) as anchor client — coordinating five specialised tanneries.'
    },
    {
      years: '2021 – 2023',
      role: 'Sourcing Agent — Six Seasons',
      company: 'Bruno Premi · Italy',
      desc: 'Managed article approvals, QC, and logistics for six consecutive seasons through SS24. Annual volume: 600K–700K sq. ft. spanning suedes, cow grain, nappa, and linings.'
    },
    {
      years: '2022 – Present',
      role: 'Boutique Agency · Multiple Clients',
      company: 'Various',
      desc: 'Simultaneously managing sourcing for boutique agents — varied article and colour development with consistent quality standards.'
    },
    {
      years: '2023 – Present',
      role: 'Leather Representative',
      company: 'Leiner Shoes · India',
      active: true,
      desc: 'Embedded representative alongside Mr. Goutam Mehra — driving continuous article development and matching precise tannery capabilities to every product requirement, season after season.'
    },
  ];
}
