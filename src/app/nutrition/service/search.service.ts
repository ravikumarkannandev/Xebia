import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  getingdata: any;
  constructor(private httpclient:HttpClient) { }
  public nutridata = new BehaviorSubject<any>(false);

  setingredient(obj: any) {
    this.getnutridetails(obj).subscribe(data=>{
      this.nutridata.next(data);
    })
    
    
  }

  geingredient() {
    return this.nutridata.asObservable();
    
  }


  getnutridetails(obj){
    const id='app_id=a54f2c4d&app_key=b5e8b2d14d3fac05cb4eb4f9b5326978';
    return this.httpclient.post(id,obj);
  }
}
