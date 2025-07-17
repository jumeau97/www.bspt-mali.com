import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  host = environment.host;
  paymentBaseUrl = 'https://ngsystem.net/sms/rest/smsService/';

  constructor(private http: HttpClient) {}

  async getOfferList(
    { pageNo = 1, pageSize = 10 }: { pageNo?: number; pageSize?: number },
    body: any
  ) {
    try {
      const response = await firstValueFrom(
        this.http.post<any>(
          `${this.host}offer/search?page=${pageNo}&limit=${pageSize}`,
          body
        )
      );
      console.log('response async', response);
      return response;
    } catch (error) {
      console.error('Error fetching offers list:', error);
      throw error;
    }
  }

  async getActivityList(pageNo: number = 1, pageSize: number = 10, body: any) {
    try {
      const response = await firstValueFrom(
        this.http.post<any>(
          `${this.host}activity/search?page=${pageNo}&limit=${pageSize}`,
          body
        )
      );
      console.log('response async', response);
      return response;
    } catch (error) {
      console.error('Error fetching activity list:', error);
      throw error;
    }
  }

  getOffers(
    { pageNo = 1, pageSize = 10 }: { pageNo?: number; pageSize?: number },
    body: any
  ) {
    return this.http.post<any>(
      `${this.host}offer/search?page=${pageNo}&limit=${pageSize}`,
      body
    );
  }

  publishOffers(body:any){
    return this.http.post(`${this.host}offer`, body);
  }

  getEnterprises(
    { pageNo = 1, pageSize = 10 }: { pageNo?: number; pageSize?: number },
    body: any
  ) {
    return this.http.post<any>(
      `${this.host}enterprise/search?page=${pageNo}&limit=${pageSize}`,
      body
    );
  }

  // NG SYSTEM PAYMENT

  orangePayWithRedirect(body: any) {
    return this.http.post<any>(`${this.host}ngsystem/pay/orange`, body);
  }

  // SAMA MONEY
  samaPay(body: any) {
    return this.http.post<any>(`${this.host}ngsystem/pay/sama`, body);
  }
  // MOOV MONEY
  moovPay(body: any) {
    return this.http.post<any>(`${this.host}ngsystem/pay/moov`, body);
  }

  //Stripe pay
  stripePay(body: any) {
    return this.http.post<any>(`${this.host}stripe/pay`, body);
  }

  // ======================= ENTERPRISE ====================
  registrationEnterprise(body: FormData) {
    return this.http.post(`${this.host}enterprise`, body);
  }

  // ====================== ACTIVITY ==========================
  getActivities(
    { page = 1, limit = 10 }: { page?: number; limit?: number },
    body: any
  ) {
    return this.http.post(
      `${this.host}activity/search?page=${page}&limit=${limit}`,
      body
    );
  }

  addNewActivity(body:any){
    return this.http.post(`${this.host}activity`, body)
  }
  


  // ============================ Authentication ====================
  login(body:any){
    return this.http.post(`${this.host}login_check`,body)
  }

  getCurrentUser(){
    return this.http.get(`${this.host}current-user`)
  }

  getUsers(  { page = 1, limit = 10 }: { page?: number; limit?: number },
    body: any){
    return this.http.post(`${this.host}users/search?page=${page}&limit=${limit}`, body)
  }

  addNewUser(body:any){
    return this.http.post(`${this.host}register`, body)
  }
}
