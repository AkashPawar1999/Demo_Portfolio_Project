import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{

  workExpList: WorkExperience[] = [
    {
      role: "Software Developer",
    company: "Agiliad Technology",
    duration: "1.3 year",
    description: [
      'worked with multiple teams to develope web and desktop appilcation.',
      'worked on different technology(Html,CSS,JS,SQL,Angular).'
    ]
    },
    {
      role: "Jr Software Developer",
    company: "Harman Technology",
    duration: "2 month",
    description: [
      'worked with multiple teams to develope Infotenment Systems(Cars) appilcation.',
      'worked on different technology(AFT, MFT).'
    ]
    }
  ]

  ngOnInit(): void {}
}
