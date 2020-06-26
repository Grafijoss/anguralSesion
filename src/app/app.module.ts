import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Page404Component } from './components/page404/page404.component';

// Services

import { AuthService } from './services/auth.service';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		WelcomeComponent,
		Page404Component
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
