import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-infomation',
  templateUrl: './personal-infomation.component.html',
  styleUrls: ['./personal-infomation.component.css']
})
export class PersonalInfomationComponent implements OnInit {

  myData: string[][] = [
    ['Name', 'Akash Pawar'],
    ['DOB', '06/09/1999'],
    ['Work Experience', '1.5 yrs'],
    ['Edcation', 'BE(2022)'],
    ['Interest', 'Cricket']
  ];

  aboutMe: string[] = [
    'Hi, I am software Enginner with 1.5 years of experience in software Industry.',
    'Worked as software Enginner in Agiliad for Frontend Technology(Html, CSS, Javascript, Angular).',
    'Delivered all product within deadlines. Always eager to grab new technology.'
  ];
  constructor() { }
  ngOnInit(): void { }

}
