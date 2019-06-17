import { Component, OnInit } from '@angular/core';
import { MemberService, IMember } from '../member.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  public memberItems: IMember[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService
      .getItems() //เรียกใช้ getItems จาก memberService 
      .subscribe(result => {
        // console.log(result);
        this.memberItems = result; //นำข้อมูลมาเก็บไว้ที่ memberItems จากนั้นข้อมูลจะถูกส่งไปวนลูปในหน้า HTML Get ซึ่งค่าของไฟล์เราได้มาจากไฟล์ Get.php ของทางฝั่ง Backend
      });

  }

}
