import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './service/data.service';
// import { CodeModule } from './code/code.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    RippleModule,
    BrowserAnimationsModule,
    NgbModule,
    // CodeModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
