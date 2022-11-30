import { Component, OnInit } from '@angular/core';
import { Left } from 'src/app/models/left.model';
import { LeftService } from 'src/app/services/left.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  left!: Left;

  constructor(private _leftService:LeftService) { }



  ngOnInit() {

    this._leftService.getLeft().subscribe(data => {
         debugger;
         console.log(data);
      if (data) {
        this.left = data;
      }
  })

}}
