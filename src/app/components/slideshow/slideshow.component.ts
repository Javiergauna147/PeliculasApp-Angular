import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';




@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterContentInit {
  
  @Input() movies: Movie[];

  public swiper: Swiper;

  constructor() { }

  ngAfterContentInit() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true
    });
  }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  
  onSlidePrev() {
    this.swiper.slidePrev();
  }
  onSlideNext() {
    this.swiper.slideNext();
  }


}