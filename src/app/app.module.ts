import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { LifeHookDemoComponent } from './life-hook-demo/life-hook-demo.component';
import { SeObservableFormModule } from './se-observable-form/se-observable-form.module';
import { SimpleFormComponent } from './simple-form/simple-form.component';


const routes: Routes = [
  { path: 'formDemo', component: FormDemoComponent },
  { path: 'lifeHook', component: LifeHookDemoComponent},
  { path: 'simple', component: SimpleFormComponent },
  { path: 'simple/:id', component: SimpleFormComponent },
  { path: '**', redirectTo: 'simple' }
];

@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent,
    LifeHookDemoComponent,
    SimpleFormComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    SeObservableFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

