import { Component, OnInit } from '@angular/core';
// import 'p5';
import * as p5 from "p5";


@Component({
  selector: 'app-fourier-series',
  templateUrl: './fourier-series.component.html',
  styleUrls: ['./fourier-series.component.scss']
})
export class FourierSeriesComponent implements OnInit {
  private p5;
  timer: any;
  constructor() { }

  ngOnInit() {
    this.createCanvas();
    this.timer = 0;
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  private sketch(p: any) {
    p.setup = () => {
      // p.background(0)
      p.createCanvas(1800, 600);


    };
  let timer = 0;
  let wave = [];

    p.draw = () => {
      p.background(0);
      p.translate(200,200);
 
      let x =0;
      let y = 0;

        for(let i=0;i<100;i++){
         let prevX =x;
         let prevY = y;

          let n = i*2 +1;
          let radius = 10 * (4/ n* p.PI);
            x += radius * p.cos(n*timer);
            y += radius * p.sin(n*timer);

            
            


            p.stroke(45,100,8);
            p.strokeWeight(2);
            p.line(prevX,prevY,x,y);
            p.stroke(100,85,64);
            p.stroke(255);
            p.noFill();
            p.ellipse(prevX, prevY, radius*2);

            p.strokeWeight(1);
            p.fill(255);
            // p.line(prevY,prevX,x,y);
            p.ellipse(x,y,10);
 

  
        }

        wave.unshift(y);
        p.stroke('red');
        p.translate(400,0);
        p.line((x-400),y,0,wave[0]);

        //drawing wave

      p.beginShape();
      p.noFill();
      p.stroke(255, 204, 0);  
      p.translate(0,0);

      for(let i=0; i< wave.length ; i++){
        p.vertex(i,wave[i]);

      }
      p.endShape();

      timer += 0.05
      console.log(timer);
      
    };
  }

}
