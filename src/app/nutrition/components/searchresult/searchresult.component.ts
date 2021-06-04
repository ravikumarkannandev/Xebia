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
  totalNutrients:any;
  totalDaily:any;
  ingredients:any;
  lsing:any;
  showdetaleddata:boolean;
  totalNutrientsKCal:any;
  ngOnInit(): void {
    //this.lsing=[1];
   this.lsing=this.ls.get('usering');
    console.log(this.lsing);
    this.service.geingredient().subscribe(data => {
        this.result=data;
        this.totalNutrients=this.result.totalNutrients;
        this.totalDaily=this.result.totalDaily;
        this.ingredients=this.result.ingredients;
        this.totalNutrientsKCal= this.result.totalNutrientsKCal;
    }) 
   
  
  }
  opendetaileddata(){

  }
 
}
