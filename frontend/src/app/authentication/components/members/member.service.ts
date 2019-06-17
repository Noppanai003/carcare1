import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private backendURL: string = 'http://localhost:9000/api/member'; // ร้องขอข้อมูล จาก URL ตัวนี้ของฝั่ง Backend
  
  constructor(private httpClient: HttpClient) { } // inject httpClient 

  // ดึงข้อมูล Member ทั้งหมด
  getItems(){
    return this.httpClient.get<IMember[]>(this.backendURL);
  }
}

export interface IMember {
  mem_id: string;
  mem_fname: string;
  mem_lname: string;
  mem_email: string;
  mem_address?: any;
  mem_phone: string;
  mem_created: string;
  mem_updated: string;
  p_password?: any;
  p_cpassword?: any;
  p_service_name?: any;
  p_id_card?: any;
  p_photo_service?: any;
  p_business_license?: any;
  p_lat?: any;
  p_long?: any;
  cr_by?: any;
  upd_by?: any;
  is_active?: any;
}
