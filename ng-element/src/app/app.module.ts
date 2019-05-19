import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    // bootstrap: [AppComponent], // REMOVE BOOTSTRAPPING FOR CUSTOM ELEMENT
    entryComponents: [AppComponent], // Add to entry components
})
export class AppModule implements DoBootstrap {

    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const ngElement = createCustomElement(AppComponent, {injector: this.injector}) as Function;
        customElements.define('ng-element', ngElement);
    }
}
