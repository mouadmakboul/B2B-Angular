import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('targetSection') targetSection!: ElementRef;
  private intervalId: any;

  ngAfterViewInit(): void {
    this.animateNom();
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  title = 'projet';

  constructor(private router: Router, private viewportScroller: ViewportScroller, private el: ElementRef) { }

  redirectToSection() {
    this.router.navigate(['/acceuil']).then(() => {
      const targetElement = this.el.nativeElement;

      // Activer le défilement fluide
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }
  

  private animateNom() {
    const nom = document.getElementById('nom');
    if (nom) {
      const nomText = nom.textContent?.trim();
      if (nomText) {
        const lettres = nomText.split('');

        nom.innerHTML = lettres
          .map((lettre, index) => `<span class="nom-letter" style="display: inline-block; opacity: 0; transition: opacity 0.5s ${index * 0.1}s;">${lettre}</span>`)
          .join('');

        const lettresSpans = document.querySelectorAll('.nom-letter');
        lettresSpans.forEach((span, index) => {
          setTimeout(() => {
            // Utilisation d'une assertion de type pour indiquer à TypeScript que span.style existe
            (span as HTMLElement).style.opacity = '1';
          }, index * 100);
        });

        // Définir un intervalle pour répéter l'animation
        this.intervalId = setInterval(() => {
          lettresSpans.forEach((span, index) => {
            setTimeout(() => {
              (span as HTMLElement).style.opacity = '0';
            }, index * 100);
          });

          setTimeout(() => {
            lettresSpans.forEach((span, index) => {
              setTimeout(() => {
                (span as HTMLElement).style.opacity = '2';
              }, index * 100);
            });
          }, lettres.length * 100);
        }, lettres.length * 200); // Ajustez la durée de l'intervalle selon vos besoins
      }
    }
  }

  private clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
