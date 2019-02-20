import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MinimalistNgChartsModule } from 'minimalist-ng-charts';


@NgModule({
    imports: [
        BrowserModule,

        MinimalistNgChartsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
