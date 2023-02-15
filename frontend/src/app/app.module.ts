import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MatTableModule } from '@angular/material/table';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { BonusHistoryComponent } from './components/bonus-history/bonus-history.component';
import { PendingBonusesComponent } from './components/pending-bonuses/pending-bonuses.component';
import { BonusFormComponent } from './components/bonus-form/bonus-form.component';
import { ApprovedBonusesComponent } from './components/approved-bonuses/approved-bonuses.component';
import { ApprovedBonusViewComponent } from './components/approved-bonus-view/approved-bonus-view.component';
import { AllPendingBonusesComponent } from './components/all-pending-bonuses/all-pending-bonuses.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        LoginComponent,
        LandingPageComponent,
        MenuBarComponent,
        ExamplePageComponent,
        NotFoundPageComponent,
        EmployeeTableComponent,
        BonusHistoryComponent,
        PendingBonusesComponent,
        BonusFormComponent,
        ApprovedBonusesComponent,
        ApprovedBonusViewComponent,
        AllPendingBonusesComponent,
    ],
    imports: [
        BrowserModule,
        AppRouting,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatGridListModule,
        MatListModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatDialogModule,
        MatFormFieldModule,
        MatStepperModule,
        MatSelectModule,
        MatSnackBarModule,
        MatBadgeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
