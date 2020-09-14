import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.scss']
})
export class TintucComponent implements OnInit {

  loaiTinTuc: string = 'DienAnh'

  constructor() { }

  ChonLoaiTin(value) {
    this.loaiTinTuc = value;
  }

  ngOnInit(): void {
  }

}
