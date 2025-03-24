import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @Input() appHover: string = 'white';
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element.nativeElement.style.color = this.color;
    console.log('!!!', this.element.nativeElement);
  }
  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appHover);
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  // }
}
