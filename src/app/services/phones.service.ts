import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../types/phone';

@Injectable()
export class PhonesService {
  constructor(private http: HttpClient) {}
  getPhone(id: number): Observable<Phone> {
    return this.http.get<Phone>(`http://localhost:3001/phones/${id}`);
  }
  addPhone(phone: Phone): Observable<any> {
    return this.http.post<Phone>('http://localhost:3001/phones', phone);
  }
  updatePhone(phone: Phone): Observable<Phone> {
    return this.http.put<Phone>(
      `http://localhost:3001/phones/${phone.id}`,
      phone
    );
  }
  deletePhone(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3001/phones/${id}`);
  }
}
