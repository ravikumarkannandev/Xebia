import{ AbstractControl } from '@angular/forms';

export function nutrivalidatestring (control:AbstractControl):
 {[key:string]:boolean} | null
{ 
  console.log(control.value.toString());
  
  if (control.value && control.value.toString().match(/\d/) &&  control.value.toString().match(/(.*[a-z]){3}/i)) {
    return null;
  }else{
    return { "name1" : true};
   
  }
  
}
//crate class for minlenth validation
export function cvMinlength(len){
  return(control:AbstractControl)=>{
    if((control.value).length >= len){
      return null;
    }else {
      return {strlen:true};
    }
};
}