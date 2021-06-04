import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class ParameterInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newurl=req.clone({ url: "https://api.edamam.com/api/nutrition-details?"+req.url});
        console.log(newurl);
    return next.handle(newurl).pipe(
        tap(result=>{
            console.log("success",result);
        },error=>{
            console.log("error",error);
        })
    )
    } 
}
