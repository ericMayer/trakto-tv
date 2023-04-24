import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DesignService } from '@shared/services/design.service';
import { MaterialDidatico } from '@shared/interfaces/material-didatico.interface';
import { openSnackBarAlert } from '@shared/utils/alert.utils';

@Component({
  selector: 'app-list-material-didatico',
  templateUrl: './list-material-didatico.component.html',
  styleUrls: ['./list-material-didatico.component.scss']
})
export class ListMaterialDidaticoComponent implements OnInit {

  public designs: MaterialDidatico[];

  constructor(
    private designService: DesignService,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {
    this.getDesigns();
  }

  private getDesigns(): void {
    this.designService.getDesigns(false)
      .subscribe({
        next: (designs: MaterialDidatico[]) => this.designs = designs,
        error: () => {
          openSnackBarAlert(this.snackBar, {
            message: 'Desculpe, não foi possível carregar as informações 😢. Por favor tente novamente.'
          });
        }
      });
  }
}
