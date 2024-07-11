import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Module Interface
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './about/about.component';
import { AboutCompanyProfileComponent } from './about-company-profile/about-company-profile.component';
import { AboutCompEmployeeComponent } from './about-comp-employee/about-comp-employee.component';
import { ProfileComponent } from './profile/profile.component';
import { authUrlGuard } from './auth-url.guard';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'About', component:AboutComponent, 
    children:[
      {
        path:"aboutComp", component:AboutCompanyProfileComponent
      }
      ,
      {
        path:"aboutCompEmployee", component:AboutCompEmployeeComponent
      }
    ]
  },
  {
    path:'Contact', component:ContactComponent
  },
  {
    path:'Blogs', component:BlogsComponent
  },
  {
    path:'studentProfile', 
    canActivate:[authUrlGuard],
    component:StudentProfileComponent
  },
  {
    path:'profile/:id', component:ProfileComponent
  },
  // lazy loading concept
  {
    path:"auth", loadChildren: ()=>import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  // {
  //   path:"login",component: LoginComponent
  // },
  // {
  //   path:"register",component: RegisterComponent
  // },

  // wild card routing
  {
    path:"**", component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
