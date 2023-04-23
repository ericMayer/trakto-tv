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
            message: 'Desculpe, aconteceu um erro em nossos serviços e não conseguimos exibir os resultados 😢. Tente recarregar a página ou tente novamente mais tarde.'
          });
        }
      });
  }
}
