import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//environment
import {environment} from '../environments/environment'

//firbase
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ItemsComponent } from './components/items/items.component'

//adding services
import { ItemService } from './services/item.service';
import { CanvasComponent } from './components/canvas/canvas.component';
import { PdfComponent } from './components/pdf/pdf.component';

//pdf
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { FourierSeriesComponent } from './components/fourier-series/fourier-series.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CanvasComponent,
    PdfComponent,
    FourierSeriesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    PdfJsViewerModule 
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
