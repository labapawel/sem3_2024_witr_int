import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { KalendarzComponent } from './kalendarz/kalendarz.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'add', component: FormComponent},
    {path: 'add/:id', component: FormComponent},
    {path: 'kalendarz', component: KalendarzComponent}
];
