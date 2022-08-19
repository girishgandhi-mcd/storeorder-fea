import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreOrderComponent } from './store-order/store-order.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }
 
  ngDoBootstrap(injector?: Injector, injected?: boolean) {
    const propperInjector = (injector && injected) ? injector : this.injector;
    const el = createCustomElement(AppComponent, { injector: propperInjector });
    customElements.define("pos2-retail-storeorder-fea", el);
  }
}