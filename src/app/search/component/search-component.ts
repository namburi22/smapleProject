import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Details } from '../resultComponent/search.result.model';
@Component({
  selector: 'app-search',
  templateUrl: './search-component.html',
  styleUrls: ['./search-component.css']
})
export class SearchComponent implements OnInit{
  searchFrom: FormGroup;
  name:string;
  type:string;
  showResults:boolean = false;
  responseData:Details;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.searchFrom = this.formBuilder.group({
    name:['', Validators.required],
    type:['', Validators.required],
  });
}
searchResult(){
this.clearData();
this.name = this.searchFrom.get('name').toString();
this.type = this.searchFrom.get('type').toString();
this.showResults = true;
}
 clearData = () => {
  this.showResults = false;
}
  response(event){
    this.responseData = event.map((event:Details)=> { return event});
  }
}
