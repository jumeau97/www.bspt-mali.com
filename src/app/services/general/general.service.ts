import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  host = environment.host;

  constructor(private http: HttpClient) { }


  async getOfferList(pageNo: number = 1, pageSize: number = 10, body: any) {
    try {
      const response = await firstValueFrom(this.http.post<any>(`${this.host}offer?page=${pageNo}&limit=${pageSize}`, body));
      console.log('response async', response);
      return response;
    } catch (error) {
      console.error('Error fetching offers list:', error);
      throw error;
    }
   }

   async getActivityList(pageNo: number = 1, pageSize: number = 10, body: any) {
    try {
      const response = await firstValueFrom(this.http.post<any>(`${this.host}activity?page=${pageNo}&limit=${pageSize}`, body));
      console.log('response async', response);
      return response;
    } catch (error) {
      console.error('Error fetching activity list:', error);
      throw error;
    }
   }

   getList(body:any){
    return this.http.post<any>(`${this.host}offer`, body);
   }
}
