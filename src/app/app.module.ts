import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { PageComponent } from './components/page/page.component';
import { ButtonComponent } from './components/button/button.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CustomDdComponent } from './components/custom-dd/custom-dd.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    AsideComponent,
    ButtonComponent,
    UsersTableComponent,
    CustomDdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
