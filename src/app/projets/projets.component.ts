import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'Google Cloud, Google Maps',
      technologies: 'Angular, Angular Material',
      description: [
        'Worked as a team member to develope apps thats are powered by cloud.',
        'Built the services of Google Map that can be used by third party applications to get Data.'
      ]
    },
    {
      title: 'Google Toolbar',
      technologies: 'Html, CSS, and JavaScript',
      description: [
        'Worked as a team member to develope apps thats are powered by cloud.',
        'Built the services of Google Map that can be used by third party applications to get Data.'
      ]
    }
  ]
  ngOnInit(): void { }

}
