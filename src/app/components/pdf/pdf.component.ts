import { Component, OnInit, ViewChild, Renderer  } from '@angular/core';

// declare var PDFjs 
// PDFjs= require('pdfjs-dist/build/pdf');

// var pdfjsLib 

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})


export class PdfComponent implements OnInit {

  @ViewChild('myCanvas',null) canvas:any;
  @ViewChild('imageLoader',null) imgLoader:any;
  ctx: any;
  canvasElement: any;
  reader: any;
  img: any;
  
  constructor( public renderer:Renderer ) { }

  ngOnInit() {
    console.log(this.canvas,"lalala");

    // this.imgLoader.addEventListener('change', handleImage, false);
    this.canvasElement=this.canvas.nativeElement;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    console.log(this.ctx);




      // console.log;
      
    }


    handleImage(e){
      console.log("called!!!");
      
      this.reader = new FileReader();
  
      this.reader.onload = function(event){
        // this.img = new Image();
        this.img = this.renderer.createElement('img');
        this.img.onload = function(){
          console.log("workign");
          
        //   // this.renderer.setElementAttribute(this.canvasElement, 'width', this.img.width);
        //   // this.renderer.setElementAttribute(this.canvasElement, 'height', this.img.height);
        setTimeout(() => {
          this.ctx.drawImage(this.img,0,0);;
        }, 1000);

        }
        this.img.src = event.target.result;
    }
    this.reader.readAsDataURL(e.target.files[0]); 
 
   
  
  }

  }


