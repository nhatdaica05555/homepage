import { JsonholderService } from './services/jsonholder.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { JsonholderComponent } from './jsonholder/jsonholder.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    JsonholderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    JsonholderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
