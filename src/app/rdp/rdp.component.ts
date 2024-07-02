import { Component } from '@angular/core';

@Component({
  selector: 'app-rdp',
  standalone: true,
  imports: [],
  templateUrl: './rdp.component.html',
  styleUrl: './rdp.component.scss'
})
export class RDPComponent {

  stages: any = [
    {
      code: '1',
      stage: 'TOPOGRAFIA',
    },
    {
      code: '2',
      stage: 'PRELIMINAR',
    },
    {
      code: '3',
      stage: 'CIVIL',
    }
  ]

  productions: any = [
    {
      item: '1.1',
      stage: {
        code: '1',
        name: 'TOPOGRAFIA',
      },
      activity: 'Locação de torre',
      unit: 'km',
      start: '01-01-2024',
      end: '01-01-2024',
      foreseen: '303',
      in_day: '2',
      previous: '0',
      accumulated: '2',
      percent_accumulated: '0.1%',
      to_execute: '670',
      executed: ['0/1', '0/2'],
      planned: ['0/3', '0/4']
    },
    {
      item: '1.2',
      stage: {
        code: '1',
        name: 'TOPOGRAFIA',
      },
      activity: 'Conferencia de Perfil',
      unit: 'torre',
      start: '01-01-2024',
      end: '01-01-2024',
      foreseen: '682',
      in_day: '2',
      previous: '0',
      accumulated: '2',
      percent_accumulated: '0.1%',
      to_execute: '670',
      executed: ['0/1', '0/2'],
      planned: ['0/3', '0/4']
    }
  ]

}
