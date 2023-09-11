import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl="https://localhost:7048/Root/";
  
  constructor(private http: HttpClient) { 
  }

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAllData`);
  }

  deleteItem(contentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/RemoveContentFromId/${contentId}`);
  }


}
