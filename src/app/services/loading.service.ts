import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingController, LoadingOptions } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private instance: HTMLIonLoadingElement | null = null;

  constructor(private loadingCtrl: LoadingController) { }

  public async present(id: string, options?: LoadingOptions) {
    if (this.instance) {
      console.warn(`Loading element already exists`);

      return;
    }

    this.instance = await this.loadingCtrl.create({
      ...options,
      spinner: 'circular',
      message: `Loading...`,
      cssClass: 'loading-modal',
      showBackdrop: true,
      id
    });

    this.instance.present();
    console.info(`Presented loading modal: '${id}'`);
  }

  public async dismiss(id?: string) {
    if (!this.instance) {
      console.warn(`Loading element does not exist`);

      return;
    }

    try {
      await this.loadingCtrl.dismiss(null, 'dismiss', id);

      console.info(`Dismissed loading modal${id ? `: '${id}'` : ''}`);
    } catch {
      console.warn(`attempt to dismiss modal failed`);
    }
  }
}
