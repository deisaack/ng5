import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule,
  MatIconModule, MatInputModule,
  MatProgressSpinnerModule, MatCardModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }
