import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Bonus } from 'src/app/interfaces/Bonus';
import { SalesManService } from 'src/app/services/sales-man.service';

@Component({
    selector: 'app-menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
    user: User;
    bonuses: Bonus[];
    hidden: boolean;

    /*
    This array holds the definition of the menu's buttons.
   */
    buttons = [
        { title: 'Home', routerLink: '' }, // the tile is the text on the button, the routerLink specifies, where it will navigate
        { title: 'Employees', routerLink: 'employees' },
        { title: 'Pending Bonuses', routerLink: 'pending' },
        { title: 'Bonus History', routerLink: 'approved' },
    ];

    /**
     * The following parameters specify objects, which will be provided by dependency injection
     *
     * @param authService
     * @param router
     * @param userService
     */
    constructor(
        private authService: AuthService,
        private router: Router,
        private userService: UserService,
        private salesManService: SalesManService
    ) {}

    ngOnInit(): void {
        this.fetchUser();
        this.salesManService.getBonuses().subscribe((response): void => {
            this.bonuses = response.body;
        });
        this.hidden = this.bonuses.length == 0;
    }

    /**
     * function which handles clicking the logout button
     */
    handleLogout(): void {
        this.authService.logout().subscribe();
        this.router.navigate(['']); // after logout go back to the login-page
    }

    /**
     * fetches information about logged-in user
     */
    fetchUser(): void {
        this.userService.getOwnUser().subscribe((user): void => {
            this.user = user;
        });
    }
}
