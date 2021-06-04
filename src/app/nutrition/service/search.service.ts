import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  getingdata: any;

  constructor(private httpclient:HttpClient) { }

  public blue = new BehaviorSubject<any>(false);

  setingredient(obj: any) {
    this.getnutridetails(obj).subscribe(data=>{
      this.blue.next(data);
    })
    
    
  }

  geingredient() {
      return this.blue.asObservable();
    
  }


  getnutridetails(obj){
    console.log(obj)    
    const id='app_id=a54f2c4d&app_key=b5e8b2d14d3fac05cb4eb4f9b5326978';
    //const url=`https://api.edamam.com/api/nutrition-details?app_id=a54f2c4d&app_key=b5e8b2d14d3fac05cb4eb4f9b5326978&ingr=1%20large%20apple`
  //    const url=`https://api.edamam.com/api/nutrition-data?app_id=a54f2c4d&app_key=b5e8b2d14d3fac05cb4eb4f9b5326978&ingr=1 cup rice,10 oz chickpeas"`
    

    return this.httpclient.post(id,obj);
  }
}
