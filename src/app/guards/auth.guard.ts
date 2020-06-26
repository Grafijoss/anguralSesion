import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private dataAuth: AuthService,
		private router: Router
	) { }

	canActivate() {
		if (!!this.dataAuth.getCurrentUser() && !!this.dataAuth.getToken()) {
			return true;
		} else {
			this.router.navigate(['']);
			return false;
		}
	}

}
