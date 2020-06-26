import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

	constructor(
		private dataAuth: AuthService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	logOut() {
		const loginOut = this.dataAuth.logOutUser();
		if (!!loginOut.length) {
			console.log(loginOut);
			this.router.navigate(['']);
		}
	}

}
