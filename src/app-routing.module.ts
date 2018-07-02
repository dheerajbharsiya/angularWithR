import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SigninComponent } from './app/signin/signin.component';
import { HomeComponent } from './app/home/home.component';
import { WelcomeComponent } from './app/welcome/welcome.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'signin', component: SigninComponent
    },
    {
        path: 'welcome', component: WelcomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}