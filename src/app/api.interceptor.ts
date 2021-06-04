import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
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
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
            
              errorMessage = `Error: ${error.error.message}`;
            } else {
             
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            window.alert("Please Search With Correct Ingredients");
            return throwError(errorMessage);
          })
        )
    }
  }
