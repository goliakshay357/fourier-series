import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas',null) canvas:any;
  canvasElement: any;
  ctx: any;
  image: any;


  constructor() { }

  ngOnInit() {
    console.log(this.canvas);
    
    this.canvasElement=this.canvas.nativeElement;
    this.ctx = this.canvasElement.getContext('2d');

    this.image = new Image();
    this.image.src = "../assets/download.png"
    
    this.ctx.drawImage(this.image,20 ,20 ,300, 160);
  }


}
