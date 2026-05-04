import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    { num: '01', icon: 'ti-search', title: 'Supplier Identification', desc: 'Locating and vetting tanneries based on article specialisation, capacity, and consistency. Every relationship built on trust and technical alignment.' },
    { num: '02', icon: 'ti-microscope', title: 'Technical Assessment', desc: 'Evaluating tannery capabilities beyond price — dye bath stability, finishing quality, and article fit. Depth that generic agencies cannot offer.' },
    { num: '03', icon: 'ti-palette', title: 'Article Development', desc: 'Driving new colour, finish, and article development across suedes, grain, nappa, and linings — in close coordination with each tannery.' },
    { num: '04', icon: 'ti-arrows-exchange', title: 'Buyer–Supplier Bridge', desc: 'Seamlessly communicating buyer specs to suppliers and vice versa, minimising approval cycles and eliminating costly misalignments.' },
    { num: '05', icon: 'ti-checkbox', title: 'Quality Control', desc: 'Overseeing production quality, ensuring season-on-season consistency. The benchmark never shifts — neither do our standards.' },
    { num: '06', icon: 'ti-receipt', title: 'Pricing & Negotiation', desc: 'Securing optimal pricing through established relationships — a balance only deep supplier familiarity enables without compromising quality.' },
  ];
}
