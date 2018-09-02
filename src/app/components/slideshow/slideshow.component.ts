import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  private currentImage = 0;

  private images = [
    'assets/slider/image1.jpg',
    'assets/slider/image2.jpg',
    'assets/slider/image3.jpg',
    'assets/slider/image4.jpg',
    'assets/slider/image5.jpg',
    'assets/slider/image6.jpg',
    'assets/slider/image7.jpg',
    'assets/slider/image8.jpg',
    'assets/slider/image9.jpg',
    'assets/slider/image10.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

  public prevImage() {
    if (this.currentImage === 0) {
      this.currentImage = 9;
    }
    else {
      this.currentImage--;
    }
  }

  public nextImage() {
    if (this.currentImage === this.images.length - 1) {
      this.currentImage = 0;
    }
    else {
      this.currentImage++;
    }
  }

  public bulletsClass(i: number):string {
    return this.currentImage===i?'active-img':''
  }

  slideStyle(img: string){
    return {'background-image': 'url('+img+')'};
  }  
}
