import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-berry-flavor-profile',
  templateUrl: './berry-flavor-profile.component.html',
  styleUrls: ['./berry-flavor-profile.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class BerryFlavorProfileComponent implements OnInit {
  @Input({ required: true }) profile!: Record<string, number>;

  entries!: [string, number][];

  constructor() { }

  ngOnInit() {
    this.entries = Object.entries(this.profile);
  }

  getWidthStyle(n: number) {
    return `width: ${n * 100}%`;
  }
}
