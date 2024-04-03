import { Skills } from './../models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
[x: string]: any;

  skills: Skills[] = [
    {
      name: "Angular, Angular Material",
      level: "Expert",
      rating: 75
    },
    {
      name: "Javascript",
      level: "Intermediate",
      rating: 70
    },
    {
      name: "Html, CSS",
      level: "Expert",
      rating: 80
    },
    {
      name: "Python",
      level: "Intermediate",
      rating: 65
    },
  ]

constructor(){}
  ngOnInit(): void {}
}
