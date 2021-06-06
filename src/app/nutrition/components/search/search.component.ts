import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {nutrivalidatestring} from '../../../shared/validation';
import { Router } from '@angular/router';
import { localstorageService } from '../../service/localstorag.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:SearchService,private fb:FormBuilder,private router:Router,private ls:localstorageService) { }
  nutrisearch: FormGroup;
  nutri;
  lsing;
  result:any;
  ngOnInit(): void {
    this.ls.set("usering", {});
    this.createform();
    
  }
  private createform(){
     /*********Ractive form validation Ravi_369**********/
    this.nutrisearch=this.fb.group({
      nutri:['',[Validators.required,nutrivalidatestring]],
    
 
    })  
    
 }
 onsubmit(){
   /*********on submit convert the string into the array by Ravi_369**********/
      var dataarray=this.nutrisearch.value['nutri'].split("\n");
      dataarray = dataarray.filter(function (el) {
      return el != "";
      });
      const obj={ingr:dataarray};
      if (Object.keys(this.ls.get("usering")).length === 0) {
      this.ls.set("usering", dataarray);
      } 
      this.service.setingredient(obj);
      this.router.navigate(['Searchresult']);

   }

}
