import { Component, OnInit } from '@angular/core';
import { PersonService } from './components/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my app';
  public help: string = "my-button";

  public myStyle = {'color':'yellow', 'font-weight': 'bold'};
  public thirdClass = true;
	
  public name = "Lokesh";
	
  public isSpecial: boolean = true;	
	
  public namesList : Array<string> = ["Jay", "Ajay", "Vijay", "Sanjay", "Dhananjay"];
	
	
  public myone : boolean = true;
	
	public myValue :string;
	
 
  constructor(private personService : PersonService){
	  
  }
	
  ngOnInit(){
	  this.personService.setName("Vikas");
  }
	
  changeInText(target){
	  console.log("Inside component changeInText : ", target);
	  target.innerText = "Thank you very much";
	  this.myone = false;
	  this.myValue = "ddds";
  }
	ngOnChanges(){
		console.log("parent ngOnChanges got called");
	}

	
}
