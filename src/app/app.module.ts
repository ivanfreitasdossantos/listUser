import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule} from '@angular/material/dialog';
import { DetalhesComponent } from './users/detalhes/detalhes.component';
import { MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: UsersComponent }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
