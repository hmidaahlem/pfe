import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComplexFormValue } from './models/complex-form-value';
import { Observable, catchError, delay, mapTo, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplexFormService {

  constructor(private http:HttpClient) { }
  saveuser(formvalue:ComplexFormValue): Observable<boolean> {
    return  this.http.post('http://localhost:3000/users',formvalue).pipe(mapTo(true),delay(100) ,catchError(() => of(false).pipe(
      delay(1000)
    ))
  );
}
}