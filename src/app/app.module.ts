import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterContainerComponent } from './character-container/character-container.component';
import { SutraViewerComponent } from './sutra-viewer/sutra-viewer.component';
import { SutraCoverContainerComponent } from './sutra-cover-container/sutra-cover-container.component';
import { SutraCoverViewerComponent } from './sutra-cover-viewer/sutra-cover-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SutraSubmissionConfirmDialogComponent } from './sutra-submission-confirm-dialog/sutra-submission-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterContainerComponent,
    SutraViewerComponent,
    SutraCoverContainerComponent,
    SutraCoverViewerComponent,
    SutraSubmissionConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
