import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule} from 'angularfire2/database'


import { AppComponent } from './app.component';

//Firebase
import {AngularFireModule } from 'angularfire2'

// Importando enviroments
import { environment } from '../environments/environment';

// Componentes
import { TodoComponent } from './components/todo/todo.component'

// Servicios
import { TodoService } from './services/todo.service'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
