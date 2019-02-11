import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[displayCss]',
  host : {
	  '(mouseenter)' : 'onMouseEnter($event.target)',
	  '(mouseleave)' : 'onMouseLeave($event.target)'
  },
  inputs : [],
  outputs : ['onDblClick'],
  providers : []
})
export class DisplayCssDirective {

  @Input("displayCss") display : boolean; 
  @Input() display2 : boolean; // if input propery value get changed from parent(myone variable) it triggers ngOnChanges method 
	
  @Output() onDblClick = new EventEmitter();

  constructor(private elementRef: ElementRef) { 
  	console.log("CssDisplayDirective constructor");
	  console.dir(elementRef);
	  console.log("display property: ", this.display);
  }

  ngOnInit() { console.log("inside ngOnInit") };
	
  ngOnChanges(change : any){
	  console.log("ngOnChanges display2: ", this.display2);
	  console.log("inside ngOnChanges method --- change : ", change);
  }
	
  onMouseEnter(elementTarget){
	  console.log("Element got MouseEnter", elementTarget);
	  elementTarget.style.color = "yellow";
  }
	
  onMouseLeave(elementTarget){
	  console.log("Element got onMouseLeave", elementTarget);
	  elementTarget.style.color = "black";
  }

  @HostListener("click", ["$event.target"]) onClick(target) {
  	 console.log("Element got clicked: ", this.display);
  	 console.dir(target);
	 //this.elementRef.nativeElement.innerText = "Thank you";
	 target.innerText = "Thank you";
	  
	 if(!this.display){
		 target.style.display = "none";
	 }
  }	
	
  @HostListener("dblclick", ["$event.target"]) onDoubleClick(target) {
  	 console.log("Element got  double clicked: ", target);
	 this.onDblClick.emit(target);
  }	


}
