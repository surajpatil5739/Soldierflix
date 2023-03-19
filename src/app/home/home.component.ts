import { Component, ViewChild,ElementRef } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {

  rightArrow = faChevronRight;
  leftArrow = faChevronLeft;


  @ViewChild('widgetsContent') widgetsContent! : ElementRef ;

  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 400;
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 400;
  }

  @ViewChild('widgetsContent1') widgetsContent1! : ElementRef ;

  scrollLeft1(){
    this.widgetsContent1.nativeElement.scrollLeft -= 400;
  }

  scrollRight1(){
    this.widgetsContent1.nativeElement.scrollLeft += 400;
  }

  imageList = [
    {url : "./assets/border.jpg"},
    {url : "./assets/lakshya.jpg"},
    {url : "./assets/1917.jpg"},
    {url : "./assets/fury.jpg"},
    {url : "./assets/Behind_Enemy_Lines_movie.jpg"},
    {url : "./assets/hacksaw_ridge2.jpg"},
    {url : "./assets/band_of_brothers.jpg"}
    
  ]

  mostLiked = [
    {url : "./assets/1917.jpg", title:"1917", whereToWatch:"SonyLiv",description:"1917 is a 2019 war film directed by Sam Mendes.The film takes place during World War I and follows two young British soldiers, Lance Corporals Blake and Schofield, who are given a mission to deliver a message to an isolated regiment that will prevent them from walking into a trap and suffering a devastating defeat.The unique aspect of this film is that it is filmed to look like a single continuous shot, which adds to the intensity and suspense of the story. The film takes the audience on a harrowing journey across the trenches and battlefields of France as the two soldiers race against time to deliver their message before its too late."},
    {url : "./assets/fury.jpg", title:"Fury", description:"This is Fury."},
    {url : "./assets/specialOps.jpg"},
    {url : "./assets/Behind_Enemy_Lines_movie.jpg", title:"Behind Enemy Lines", description:"This is behind Enemy lines."},
    {url : "./assets/hacksaw_ridge2.jpg"},
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
