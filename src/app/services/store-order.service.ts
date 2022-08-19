import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreOrderService {
  getOutageHeaderImageUrl(outageHeaderImage: string): string {
    const filename = outageHeaderImage;

    let src = environment.DigitalAssetsBasePath
      + `${environment.mcdMarketId}/`
      + `${environment.mcdRestaurantId}/`
      + `${environment.mcdRepositoryName}/`
      + `${filename}/`
      + `stream`;

    if (environment.mcdAcceptLanguage) {
      src += `?mcd-accept-language=${environment.mcdAcceptLanguage}`;
    }
    return src;
  };
}
