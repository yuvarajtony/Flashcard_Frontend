import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeServiceService } from '../home-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-dialogbox',
  templateUrl: './delete-dialogbox.component.html',
  styleUrls: ['./delete-dialogbox.component.css']
})
export class DeleteDialogboxComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeleteDialogboxComponent>,
    private homeservice: HomeServiceService,
    private router: Router) { }

    deleteflash()
    {
      this.homeservice.deleteFlashcard(this.data).subscribe(res => {
        console.log(res);
      })

      this.router.navigateByUrl('', {skipLocationChange: false}).then(() => {
        this.router.navigate(['home'])
      })
  
      this.dialogRef.close();
    }

}
