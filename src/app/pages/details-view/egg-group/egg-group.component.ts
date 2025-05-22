import { EggGroup } from '#types/entity/egg-group.types';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { NameListComponent } from "#components/name-list/name-list.component";

@Component({
  selector: 'app-egg-group',
  templateUrl: './egg-group.component.html',
  styleUrls: ['./egg-group.component.scss'],
  standalone: true,
  imports: [IonicModule, NameListComponent]
})
export class EggGroupComponent implements OnInit {
  @Input({ required: true }) data!: EggGroup;
  constructor() { }

  ngOnInit() { }

}
