import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ClientsComponent } from './components/clients/clients.component';
import { WhyComponent } from './components/why/why.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TimelineComponent,
    GalleryComponent,
    ClientsComponent,
    WhyComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.initRevealObserver();
  }

  private initRevealObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all .reveal elements
    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        this.observer.observe(el);
      });
    };

    observe();

    // Re-observe after a short delay for dynamically rendered elements
    setTimeout(observe, 500);
    setTimeout(observe, 1200);
  }
}
