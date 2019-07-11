import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TestsPodMenuComponent } from './tests_podmenu/tests_podmenu.component';
import { TestComponent } from './test.component';


export const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'test-podmenu', component: TestsPodMenuComponent }
]
@NgModule({


  declarations: [
    
    TestsPodMenuComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule
  ],


  providers: [],
  
})
export class TestModule { }
