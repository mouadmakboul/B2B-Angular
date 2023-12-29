
import { Router } from '@angular/router';
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {
  @ViewChild('targetSection') targetSection!: ElementRef;
  private intervalId: any;

 

  constructor(private router: Router, private viewportScroller: ViewportScroller, private el: ElementRef) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  redirectToSection() {
    this.router.navigate(['/clothes']).then(() => {
      const targetElement = this.el.nativeElement;

      // Activer le défilement fluide
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }}
