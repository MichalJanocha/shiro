import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LayoutNotificationsComponent } from '../layout-notifications/layout-notifications.component';
import { LayoutUserComponent } from '../layout-user/layout-user.component';

@Component({
  selector: 'app-feature-layout',
  templateUrl: './feature-layout.component.html',
  styleUrls: ['./feature-layout.component.scss']
})
export class FeatureLayoutComponent implements OnInit {

  constructor(
    private readonly popoverCtrl: PopoverController
  ) { }

  ngOnInit(): void {
  }

  openUser(ev: Event) {
    this.popoverCtrl.create({
      component: LayoutUserComponent,
      animated: true,
      backdropDismiss: true,
      showBackdrop: true,
      event: ev,
      cssClass: 'jk-popover'
    }).then(pop => {
      pop.present();
    })
  }

  openNotifications(ev: Event){
    this.popoverCtrl.create({
      component: LayoutNotificationsComponent,
      animated: true,
      backdropDismiss: true,
      showBackdrop: true,
      event: ev,
      cssClass: 'jk-popover'
    }).then(pop => {
      pop.present();
    })
  }
}
