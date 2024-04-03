import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  educationList: Education[] = [
    {
      institute: "Pravara Rural Eng College",
      course: "BE",
      duration: "2019-2022",
      score: "85%"
    },
    {
      institute: "Amrutvahini Polytechnic College",
      course: "Diploma",
      duration: "2017-2019",
      score: "80%"
    },
    {
      institute: "P.P.G.M.Vidyalaya & Jr College",
      course: "HSC",
      duration: "2015-2017",
      score: "60%"
    },
    {
      institute: "P.P.G.M.Vidyalaya",
      course: "SSC",
      duration: "2014-2015",
      score: "90%"
    }
  ]

  ngOnInit(): void { }
}
