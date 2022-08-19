import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StoreOrderService } from 'src/app/services/store-order.service';

@Component({
  selector: 'app-store-order',
  templateUrl: './store-order.component.html',
  styleUrls: ['./store-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreOrderComponent {
  constructor(private appStateService: StoreOrderService) {}

  // To get images from digitalasset api
  getStoreOrderImageUrl(StoreOrderImage: string): string {
    return this.appStateService.getOutageHeaderImageUrl(StoreOrderImage);
  }
}
