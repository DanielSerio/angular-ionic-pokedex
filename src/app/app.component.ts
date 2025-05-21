import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  providers: [
    TitleCasePipe
  ]
})
export class AppComponent {
  constructor() { }
}
