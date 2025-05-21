import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DetailNavigationState, NavigationState } from '#types/state/navigation-state.types';
import { TitleKababPipe } from '#pipes/title-kabab.pipe';
import { ApiService } from '#services/api.service';
import { ListResponse } from '#types/list.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TitleKababPipe]
})
export class ListViewPage implements OnInit, OnDestroy {
  state = this.router.getCurrentNavigation()!.extras.state as NavigationState;
  listResponse: ListResponse<object | undefined> | null = null;

  private subscription = new Subscription();

  constructor(
    private router: Router,
    private apiService: ApiService,
    private navCtrl: NavController
  ) {
    this.apiService.getList(this.state.nameKey);
  }

  ngOnInit() {
    this.subscription.add(this.subscriber$ListResponse());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscriber$ListResponse() {
    return this.apiService.listResponse$.subscribe((res) => {
      this.listResponse = res;
    });
  }

  goToDetails(item: { url: string; } & Record<string, any>) {
    const state: DetailNavigationState & typeof item = {
      nameKey: this.state.nameKey,
      ...item
    };

    this.navCtrl.navigateForward('/details-view', {
      state
    });
  }
}
