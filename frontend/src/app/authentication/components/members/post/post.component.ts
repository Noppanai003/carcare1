import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // สร้าง model เอาไว้เก็บค่าที่อยู่ใน Input
  public model = {
  mem_fname: '',
  mem_lname: '',
  mem_email: '',
  mem_address: '',
  mem_phone: ''
  };

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(){
    console.log(this.model);
  }

}
