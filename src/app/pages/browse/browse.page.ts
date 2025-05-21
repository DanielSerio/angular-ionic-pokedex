import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '#services/api.service';
import { Subscription } from 'rxjs';
import { BrowseResponse } from '#types/browse.types';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BrowsePage implements OnInit {
  response!: BrowseResponse;
  responseKeys!: (keyof BrowseResponse)[];

  subscription = new Subscription();

  constructor(private apiService: ApiService) {
    this.apiService.getBrowseMenu();
  }

  ngOnInit() {
    this.subscription.add(this.subscriber$Response());
  }

  private subscriber$Response() {
    return this.apiService.browseResponse$.subscribe((res) => {
      this.response = res;
      this.responseKeys = Object.keys(res) as (keyof BrowseResponse)[];
    });
  }
}
