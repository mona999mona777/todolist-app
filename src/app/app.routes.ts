import { Routes } from '@angular/router';
import { userGuard } from './core/guards/user.guard';
import { nodeGuard } from './core/guards/node.guard';
import { UserComponent } from './layout/user/user.component';
import { NodeBlankComponent } from './layout/node-blank/node-blank.component';
// export const routes: Routes = [
// {path:'',component:UserComponent,canActivate:[nodeGuard],
//     children:[
//     {path:'',redirectTo:'home', pathMatch:'full',title:'home'},
//     {path:'home',component:HomeComponent,title:'home'},
//     {path:'signin',component:SigninComponent,title:'signin'},
//     {path:'signup',component:SignupComponent,title:'signup'}
// ]},
// {path:'',component:NodeBlankComponent,canActivate:[userGuard],
//     children:[
//     {path:'node',component:NodeComponent,title:'node'}
// ]},
// {path:'**',component:NotfoundComponent,title:'notfound'},
// ];
// ///////////////////////////////////////


export const routes: Routes = [
    {path:'',
    canActivate:[nodeGuard],
    loadComponent: () =>
    import('./layout/user/user.component').then((m) => m.UserComponent),
        children:[
        {path:'',redirectTo:'home', pathMatch:'full',title:'home'},
        {
            path: 'home',
            loadComponent: () =>
              import('./components/home/home.component').then((m) => m.HomeComponent),
            title: 'home',
          },
          {
            path: 'signin',
            loadComponent: () =>
              import('./components/signin/signin.component').then((m) => m.SigninComponent),
            title: 'signin',
          },
          {
            path: 'signup',
            loadComponent: () =>
              import('./components/signup/signup.component').then((m) => m.SignupComponent),
            title: 'signup',
          },
    ]},
    {
    path:'',
    canActivate:[userGuard],
    loadComponent: () =>
     import('./layout/node-blank/node-blank.component').then((m) => m.NodeBlankComponent),
     children:[
        {
            path: 'node',
            loadComponent: () =>
              import('./components/node/node.component').then((m) => m.NodeComponent),
            title: 'node',
          },
    ]},
    {
        path: '**',
        loadComponent: () =>
          import('./components/notfound/notfound.component').then((m) => m.NotfoundComponent),
        title: 'notfound',
    },
    ];
    