import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Page404Component } from './components/page404/page404.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
	{ path: '**', component: Page404Component }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
