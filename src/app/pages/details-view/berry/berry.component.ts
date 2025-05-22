import { Berry } from '#types/entity/berry.types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.scss'],
})
export class BerryComponent implements OnInit {
  @Input({ required: true }) data!: Berry;

  constructor() { }

  ngOnInit() { }

}
