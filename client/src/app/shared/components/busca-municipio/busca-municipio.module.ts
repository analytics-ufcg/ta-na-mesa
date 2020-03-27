import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BuscaMunicipioComponent } from './busca-municipio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BuscaMunicipioComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
  exports: [BuscaMunicipioComponent]
})
export class BuscaMunicipioModule { }
