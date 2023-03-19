import { Component,ViewChild,ElementRef } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-webseries',
  templateUrl: './webseries.component.html',
  styleUrls: ['./webseries.component.css']
})
export class WebseriesComponent {
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

  hollywoodWebseries = [
    {url : "./assets/band_of_brothers.jpg"},
    {url : "./assets/jackRyan.jpg"},
    {url : "./assets/theBrave.jpg"},
    {url : "./assets/sealTeam.jpg"},
    {url : "./assets/thePacific.jpg"},
    {url : "./assets/strikeBack.jpg"}
  ]

  bollywoodWebseries = [
    {url : "./assets/testCase.jpg"},
    {url : "./assets/TheForgottenArmy_AzaadiKeLiye.jpg"},
    {url : "./assets/bardOfBlood.jpg"},
    {url : "./assets/specialOps.jpg"},
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
