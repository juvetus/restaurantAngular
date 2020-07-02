import { Component, OnInit } from '@angular/core';
//import * as M from '../assets/materialize/js/materialize.min.js';
import { Menu } from './menu';
import { MENUS } from './mak-menus';

@Component({
  selector: 'app-root',
  templateUrl:"./app.component.html" ,
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public menus : Menu[];
  private title : string =" Menus";
  cheminImage:any = "url/vers/mon/image.jpg";
 // options = {fullWidth: true,indicators: true};

  ngOnInit (){
   // this.menus =  MENUS;
   // var elems = document.querySelectorAll('.carousel');
   // var instances = M.Carousel.init(elems, this.options);
    
   
  }
  selectMenu(menu : Menu){
    alert("Vous avec selectionnez : " + menu.name);
  }

 
}
