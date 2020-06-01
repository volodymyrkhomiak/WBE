import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PriceComponent } from './page/price/price.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturesComponent } from './features/features.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'prices', component: PriceComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PriceComponent,
    CarouselComponent,
    FeaturesComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
