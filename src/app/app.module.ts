import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskInputComponent } from './components/task-input/task-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskListComponent,
    TaskItemComponent,
    FooterComponent,
    TaskInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
