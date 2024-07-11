import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { BlogsComponent } from './blogs/blogs.component';

import {HttpClientModule} from '@angular/common/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
// import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModuleListModule } from './MaterialUl/mat-module-list/mat-module-list.module';
import { CustomCompComponent } from './component/custom-comp/custom-comp.component';
import { CurrencyValPipe } from './customePipes/currency-val.pipe';
import { AboutComponent } from './about/about.component';
import { AboutCompanyProfileComponent } from './about-company-profile/about-company-profile.component';
import { AboutCompEmployeeComponent } from './about-comp-employee/about-comp-employee.component';
import { ProfileComponent } from './profile/profile.component';
import { HooksComponent } from './hooks/hooks.component';
import { EditDataComponent } from './edit-data/edit-data.component';

console.log("App module load")
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    StudentProfileComponent,
    BlogsComponent,
    PageNotFoundComponent,
    CustomCompComponent,
    CurrencyValPipe,
    AboutComponent,
    AboutCompanyProfileComponent,
    AboutCompEmployeeComponent,
    ProfileComponent,
    HooksComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AuthModule,
    BrowserAnimationsModule,
    MatModuleListModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
