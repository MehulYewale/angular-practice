import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PersonService } from './../person.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {

  public myName :string;
  @Input() inputValue : string;
  @Output() methodToCall = new EventEmitter();
  constructor(private personService: PersonService) { }

	getServiceValue(){
		console.log("getService call");
		this.myName = this.personService.getName();
		this.inputValue = this.myName;
	}
	
	ngOnChanges(){
		console.log("ngOnChanges got called");
		this.methodToCall.emit();
	}

}
