import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ApiService } from '#services/api.service';
import { Subscription } from 'rxjs';
import { BrowseResponse } from '#types/browse.types';
import { TitleKababPipe } from '#pipes/title-kabab.pipe';
import { NavigationState } from '#types/state/navigation-state.types';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TitleKababPipe],

})
export class BrowsePage implements OnInit, OnDestroy {
  response!: BrowseResponse;
  responseKeys!: (keyof BrowseResponse)[];

  subscription = new Subscription();

  constructor(
    private apiService: ApiService,
    private navCtrl: NavController
  ) {
    this.apiService.getBrowseMenu();
  }

  ngOnInit() {
    this.subscription.add(this.subscriber$Response());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscriber$Response() {
    return this.apiService.browseResponse$.subscribe((res) => {
      this.response = res;
      this.responseKeys = Object.keys(res) as (keyof BrowseResponse)[];
    });
  }

  onItemClick(key: keyof BrowseResponse) {
    this.navCtrl.navigateForward('list-view', {
      state: {
        nameKey: key
      } satisfies NavigationState
    });
  }
}
