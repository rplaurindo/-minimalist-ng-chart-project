import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleComponent } from './component';

import { MinimalistNgChartModule } from 'minimalist-ng-charts';


@NgModule({
    imports: [
        CommonModule,
        MinimalistNgChartModule
    ],
    declarations: [
        ExampleComponent
    ],
    exports: [
        ExampleComponent
    ]
})
export class ExampleModule { }
