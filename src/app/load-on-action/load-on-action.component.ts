import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-on-action',
  templateUrl: './load-on-action.component.html',
  styleUrls: ['./load-on-action.component.scss']
})
export class LoadOnActionComponent implements OnInit {

  isBase64Visible = false;
  isImageVisible = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
