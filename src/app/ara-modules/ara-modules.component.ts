import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ara-modules',
  templateUrl: './ara-modules.component.html',
  styleUrls: ['./ara-modules.component.scss']
})
export class AraModulesComponent implements OnInit {

  modules =[
    {
      img: '../../assets/images/img-03.jpg',
      title: 'Nueve Cuenta con ARA', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      img: '../../assets/images/img-02.jpg',
      title: 'ARA PF', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      img: '../../assets/images/img-01.jpg',
      title: 'Cuenta con ARA. Contrátanos', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
