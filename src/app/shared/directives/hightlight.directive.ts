import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements AfterViewInit {
@Input() color='red';
  constructor( private el:ElementRef,private rendered:Renderer2) { }
  ngAfterViewInit(): void {
    this.setbackroundcolor("red");
   
  }
  setbackroundcolor(color:string){
    this.rendered.setStyle(this.el.nativeElement,'backround-color',color);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setbackroundcolor('lightgreen');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setbackroundcolor(this.color);
  }

  @HostListener('click') onClick() {
    this.color = 'lightgreen';
  }
}
