import { Component, OnInit } from '@angular/core';
//import * as M from '../assets/materialize/js/materialize.min.js';
import { Menu } from '../menu';
import { MENUS } from '../mak-menus';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-menu',
  templateUrl: './liste-menu.component.html',
  styleUrls: ["./liste-menu.component.css"]
})
export class ListeMenuComponent implements OnInit {
  public menus : Menu[];
  private title : string =" Menus";
  cheminImage:any = "url/vers/mon/image.jpg";
  options = {fullWidth: true,indicators: true};
  myDate = Date.now ();
  
  constructor() { }

  ngOnInit(): void {
    this.menus =  MENUS;
   
  }

 

}

