import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl="https://localhost:7048/Root";
  
  constructor(private http: HttpClient) { 
  }

  getData(title? : string): Observable<any[]> {
    const url = title ? `${this.apiUrl}/getData?title=${title}` : `${this.apiUrl}/getData`;
    return this.http.get<any[]>(url);
  }

  deleteContent(contentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/RemoveContentFromId?contentId=${contentId}`);
  }


}
