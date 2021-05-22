import { NgModule } from "@angular/core";
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';


const material =[
    MatToolbarModule
]


@NgModule({
    exports: [
      CdkTableModule,
      CdkTreeModule,
      MatAutocompleteModule,
    //   MatBadgeModule,
    //   MatBottomSheetModule,
    //   MatButtonModule,
    //   MatButtonToggleModule,
    //   MatCardModule,
    //   MatCheckboxModule,
    //   MatChipsModule,
    //   MatStepperModule,
    //   MatDatepickerModule,
    //   MatDialogModule,
    //   MatDividerModule,
    //   MatExpansionModule,
    //   MatGridListModule,
    //   MatIconModule,
    //   MatInputModule,
    //   MatListModule,
    //   MatMenuModule,
    //   MatNativeDateModule,
    //   MatPaginatorModule,
    //   MatProgressBarModule,
    //   MatProgressSpinnerModule,
    //   MatRadioModule,
    //   MatRippleModule,
    //   MatSelectModule,
    //   MatSidenavModule,
    //   MatSliderModule,
    //   MatSlideToggleModule,
    //   MatSnackBarModule,
    //   MatSortModule,
    //   MatTableModule,
    //   MatTabsModule,
      MatToolbarModule,
    //   MatTooltipModule,
    //   MatTreeModule,
    //   MatFormFieldModule,
    ],
    imports: [material]
  })
  export class MaterialModule {}
  