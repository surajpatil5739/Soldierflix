import { Component, ViewChild,ElementRef } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {

  // variables for arrow icon
  rightArrow = faChevronRight;
  leftArrow = faChevronLeft;

  // Imagelist for most watched section
  imageList = [
    {url : "./assets/border.jpg", title:"Border", whereToWatch: "Youtube", description : "Border is a 1997 Bollywood war film directed by J. P. Dutta, based on the Battle of Longewala during the Indo-Pakistani War of 1971. The film stars Sunny Deol, Sunil Shetty, Akshaye Khanna, and Jackie Shroff in lead roles, and depicts the bravery and sacrifice of the Indian soldiers who defended their country against a much larger Pakistani force. The film features intense battle scenes and emotional moments, and has been widely praised for its realistic portrayal of war and the soldiers who fight in it. "Border" was a critical and commercial success and is considered one of the best war films in Indian cinema." },
    {url : "./assets/lakshya.jpg", title: "Lakshya", whereToWach : "JioCinema", description : "Lakshya is a 2004 Bollywood film directed by Farhan Akhtar, starring Hrithik Roshan, Preity Zinta, and Amitabh Bachchan. The film follows the story of Karan Shergill (played by Hrithik Roshan), a young man who is lost and directionless in life. After joining the Indian Army on a whim, he is sent to the Kargil conflict zone and begins to find his purpose and courage as a soldier. The film explores Karan's transformation from a carefree youngster to a focused and dedicated soldier, as well as the impact his service has on his personal relationships. "Lakshya" received critical acclaim for its realistic portrayal of army life and war, as well as Hrithik Roshan's performance. The film also features memorable songs composed by Shankar-Ehsaan-Loy."},
    {url : "./assets/1917.jpg", title:"1917", whereToWatch:"SonyLiv",description:"1917 is a 2019 war film directed by Sam Mendes.The film takes place during World War I and follows two young British soldiers, Lance Corporals Blake and Schofield, who are given a mission to deliver a message to an isolated regiment that will prevent them from walking into a trap and suffering a devastating defeat.The unique aspect of this film is that it is filmed to look like a single continuous shot, which adds to the intensity and suspense of the story. The film takes the audience on a harrowing journey across the trenches and battlefields of France as the two soldiers race against time to deliver their message before its too late."},
    {url : "./assets/fury.jpg", title:"Fury", whereToWatch:"Netflix", description:"Fury is a 2014 American war film written and directed by David Ayer, starring Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña, and Jon Bernthal. The film is set during the final months of World War II and follows a five-man crew of an American tank called "Fury," led by Staff Sergeant Don "Wardaddy" Collier (played by Brad Pitt), as they undertake a dangerous mission behind enemy lines in Germany. The film portrays the brutal and violent reality of war and the toll it takes on soldiers. "Fury" was well received for its performances, particularly Brad Pitt's, as well as its action sequences and realistic portrayal of tank warfare."},
    {url : "./assets/Behind_Enemy_Lines_movie.jpg", title:"Behind Enemy Lines", whereToWatch:"hotstar", description : "Behind Enemy Lines is a 2001 American war film directed by John Moore, starring Owen Wilson and Gene Hackman. The film follows a US Navy pilot, Lieutenant Chris Burnett (played by Owen Wilson), who is shot down over Bosnia while on a reconnaissance mission. With enemy soldiers hot on his trail, Burnett must evade capture and make his way back to safety, while his commanding officer, Admiral Leslie Reigart (played by Gene Hackman), defies orders to launch a rescue mission to save him. "Behind Enemy Lines" features intense action sequences and suspenseful moments, as well as themes of duty, honor, and sacrifice. The film was well received for its thrilling plot and strong performances by its cast."},
    {url : "./assets/hacksaw_ridge2.jpg"},
    {url : "./assets/band_of_brothers.jpg"}
    
  ]

  // function of most watched to scroll left and right
  @ViewChild('widgetsContent') widgetsContent! : ElementRef ;

  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 400;
  }

  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 400;
  }


  // ImageList for most liked section
  mostLiked = [
    {url : "./assets/1917.jpg", title:"1917", whereToWatch:"SonyLiv",description:"1917 is a 2019 war film directed by Sam Mendes.The film takes place during World War I and follows two young British soldiers, Lance Corporals Blake and Schofield, who are given a mission to deliver a message to an isolated regiment that will prevent them from walking into a trap and suffering a devastating defeat.The unique aspect of this film is that it is filmed to look like a single continuous shot, which adds to the intensity and suspense of the story. The film takes the audience on a harrowing journey across the trenches and battlefields of France as the two soldiers race against time to deliver their message before its too late."},
    {url : "./assets/fury.jpg", title:"Fury", description:"This is Fury."},
    {url : "./assets/specialOps.jpg"},
    {url : "./assets/Behind_Enemy_Lines_movie.jpg", title:"Behind Enemy Lines", description:"This is behind Enemy lines."},
    {url : "./assets/hacksaw_ridge2.jpg"},
    {url : "./assets/band_of_brothers.jpg"}
  ]

  // function of most liked to scroll left and right
  @ViewChild('widgetsContent1') widgetsContent1! : ElementRef ;

  scrollLeft1(){
    this.widgetsContent1.nativeElement.scrollLeft -= 400;
  }

  scrollRight1(){
    this.widgetsContent1.nativeElement.scrollLeft += 400;
  }



  // variables to store different values to be shown in modal
  title : string = "Title";
  description:string = "...";
  whereToWatch:string = "...";

  // function to display modal
  expand(image : any){
    this.title = image.title;
    this.description = image.description;
    this.whereToWatch = image.whereToWatch;
  }


 
}
