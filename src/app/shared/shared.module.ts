import { ModuleWithProviders, NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';

import { MatTooltipModule } from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { WorksService } from './services/works.service';
import { AuthorPipe } from './pipes/author.pipe';


const Modules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule,
  MatTooltipModule,
  MatDividerModule,
  MatTreeModule,
  MatExpansionModule,
  MatProgressSpinnerModule
];

const Providers = [
  WorksService
];

const Components = [
  HeaderComponent,
  SpinnerComponent,
  AuthorPipe
]

@NgModule({
  declarations: [
    Components,
  ],
  imports: [
    CommonModule,
    Modules
  ],
  exports: [
    Modules,
    Components
  ],
  providers: [
    Providers
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: Providers
    };
  }
}
