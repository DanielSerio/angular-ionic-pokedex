import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DetailNavigationState } from '#types/state/navigation-state.types';
import { ApiService } from '#services/api.service';
import { ApiHelpers } from '#utilities/api.helpers';
import { Subscription } from 'rxjs';
import { EggGroupComponent } from "./egg-group/egg-group.component";
import { ResponseValidation } from '#utilities/response.validation';
import { AbilityComponent } from './ability/ability.component';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.page.html',
  styleUrls: ['./details-view.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, EggGroupComponent, AbilityComponent]
})
export class DetailsViewPage implements OnInit, OnDestroy {
  state = this.router.getCurrentNavigation()!.extras.state as DetailNavigationState;

  detailsResponse: unknown;
  ResponseValidator = ResponseValidation;

  private subscription = new Subscription();

  get title() {
    if (!!this.detailsResponse && (this.detailsResponse as { [k: string]: any; })['name']) {
      return (this.detailsResponse as { [k: string]: any; })['name'];
    }
    return '';
  }

  constructor(private router: Router, private apiService: ApiService) {
    // get the extended 'payload' to be used for fetching
    const extended = ApiHelpers.getExtendedNamedItem({
      name: this.state.name ?? '',
      url: this.state.url
    });

    this.apiService.getDetails(this.state.nameKey, extended.id);
  }

  ngOnInit() {
    this.subscription.add(this.subscriber$detailsResponse());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscriber$detailsResponse() {
    return this.apiService.detailsResponse$.subscribe((res) => {
      this.detailsResponse = res;
    });
  }
}
