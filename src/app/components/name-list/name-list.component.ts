
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AbilityName } from '#types/entity/ability.types';
import { EggGroupName } from '#types/entity/egg-group.types';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class NameListComponent implements OnInit {
  @Input({ required: true }) names!: (AbilityName | EggGroupName)[];

  constructor() { }

  ngOnInit() { }

}
