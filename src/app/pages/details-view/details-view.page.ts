import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DetailNavigationState } from '#types/state/navigation-state.types';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.page.html',
  styleUrls: ['./details-view.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsViewPage implements OnInit {
  state = this.router.getCurrentNavigation()!.extras.state as DetailNavigationState;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
