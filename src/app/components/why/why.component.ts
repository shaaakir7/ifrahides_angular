import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why.component.html',
  styleUrl: './why.component.scss'
})
export class WhyComponent {
  items = [
    {
      num: 'I', icon: 'ti-microscope',
      title: 'Rare Technical Depth',
      desc: 'A sourcing agent with a formal degree in leather technology and postgraduate footwear expertise — uncommon, and it matters at the development stage where precision defines outcomes.',
      wide: false
    },
    {
      num: 'II', icon: 'ti-building-factory-2',
      title: 'Pan-India Supplier Network',
      desc: 'Established relationships across Ranipet and Chennai with tanneries specialised in specific articles — suedes, grain, nappa, linings — not generalists.',
      wide: false
    },
    {
      num: 'III', icon: 'ti-trending-up',
      title: 'Proven Volume Capability',
      desc: 'Six consecutive seasons with Bruno Premi at 600K–700K sq. ft. per year demonstrates consistent execution and reliable scale.',
      wide: false
    },
    {
      num: 'IV', icon: 'ti-clock-bolt',
      title: 'Fast Development Cycles',
      desc: 'Deep supplier familiarity reduces approval timelines. We know exactly who is strong at what before the enquiry is placed — no time wasted on misaligned outreach.',
      wide: false
    },
    {
      num: 'V', icon: 'ti-heart-handshake',
      title: 'Integrity & Longevity',
      desc: 'Every partnership — Pioneer Leder Tex, Bruno Premi, Leiner Shoes — has been long-term, built on trust, transparency, and results. Our track record speaks without embellishment.',
      wide: true
    },
  ];
}
