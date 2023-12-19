import { Component } from '@angular/core';
import {Link} from "../../models/link";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  links: Link[] = [
    { title: 'Pokedex', url: '/pokedex/1' },
    { title: 'Type', url: '/pokemon/type'}
  ]

}
