import { Component,ViewChild,ElementRef } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  rightArrow = faChevronRight;
  leftArrow = faChevronLeft;

  @ViewChild('widgetsContent') widgetsContent! : ElementRef ;

  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 400;
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 400;
  }

  worldWarMovies = [
    {url : "./assets/savingPrivateRyan.jpg"},
    {url : "./assets/dunkirk.jpg"},
    {url : "./assets/fury.jpg"},
    {url : "./assets/schindler'sList.jpg"},
    {url : "./assets/bridgeOnTheRiverKwai.jpg"},
    {url : "./assets/lettersFromIwoJima.jpg"}
  ]

  @ViewChild('widgetsContent1') widgetsContent1! : ElementRef ;

  scrollLeft1(){
    this.widgetsContent1.nativeElement.scrollLeft -= 400;
  }

  scrollRight1(){
    this.widgetsContent1.nativeElement.scrollLeft += 400;
  }

  nonWorldWarMovies = [
    {url : "./assets/topGun.jpg"},
    {url : "./assets/hurtLocker.jpg"},
    {url : "./assets/blackHackDown.jpg"},
    {url : "./assets/crimsonTide.jpg"},
    {url : "./assets/zeroDarkThirty.jpg"},
    {url : "./assets/siege.jpg"}
  ]

  @ViewChild('widgetsContent2') widgetsContent2! : ElementRef ;

  scrollLeft2(){
    this.widgetsContent2.nativeElement.scrollLeft -= 400;
  }

  scrollRight2(){
    this.widgetsContent2.nativeElement.scrollLeft += 400;
  }

  bollywoodMovies = [
    {url : "./assets/border.jpg"},
    {url : "./assets/lakshya.jpg"},
    {url : "./assets/haqeeqat.jpg"},
    {url : "./assets/loc.jpg"},
    {url : "./assets/uri.jpg"},
    {url : "./assets/band_of_brothers.jpg"}
  ]

  @ViewChild('widgetsContent3') widgetsContent3! : ElementRef ;

  scrollLeft3(){
    this.widgetsContent3.nativeElement.scrollLeft -= 400;
  }

  scrollRight3(){
    this.widgetsContent3.nativeElement.scrollLeft += 400;
  }

  shortMovies = [
    {url : "./assets/lastPost.jpg"},
    {url : "./assets/theSoldier.jpg"},
    {url : "./assets/gloryAtSea.jpg"},
    {url : "./assets/combatObscura.jpg"},
    {url : "./assets/conscript.jpg"},
    {url : "./assets/band_of_brothers.jpg"}
  ]


  title : string = "Title";
  description:string = "...";
  whereToWatch:string = "...";

  expand(image : any){
    this.title = image.title;
    this.description = image.description;
    this.whereToWatch = image.whereToWatch;
  }
}
