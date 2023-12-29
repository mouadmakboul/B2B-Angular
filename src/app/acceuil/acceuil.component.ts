
import { Router } from '@angular/router';

import { ViewportScroller } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent{
  @ViewChild('targetSection') targetSection!: ElementRef;
  private intervalId: any;

  

  constructor(private router: Router,private el: ElementRef,private viewportScroller: ViewportScroller) { }

  redirectToSection() {
    this.router.navigate(['/signin'])
      
    };
  }
  
  




