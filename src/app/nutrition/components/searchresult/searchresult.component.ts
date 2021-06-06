import { Component, OnInit } from '@angular/core';
import { localstorageService } from '../../service/localstorag.service';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(private service:SearchService,private ls:localstorageService ) { }
  result:any;
  error:string;
  totalNutrients:any;
  totalDaily:any;
  ingredients:any;
  lsing:any;
  showdetaleddata:boolean;
  totalNutrientsKCal:any;
  showtotalnutridetails:boolean=false;
  shownutrifacts:boolean=false;
  ngOnInit(): void {
    
    this.lsing=this.ls.get('usering');
    this.service.geingredient().subscribe(data => {
    this.result=data;
    this.totalNutrients=this.result.totalNutrients;
    this.totalDaily=this.result.totalDaily;
    this.ingredients=this.result.ingredients;
    this.totalNutrientsKCal= this.result.totalNutrientsKCal;
    }, error => {
    this.error = error;
   }) 
   
  
  }
  opendetaileddata(){
    this.showtotalnutridetails = !this.showtotalnutridetails;
  }
  opendnutrfact(){
    this.shownutrifacts = !this.shownutrifacts;
  }
 
}
