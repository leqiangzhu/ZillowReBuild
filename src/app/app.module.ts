import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './app.routing';
 
import { FormsModule }  from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WrapperComponent,
    FooterComponent,
    SearchComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule ,
 
   routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
