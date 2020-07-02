import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../interfaces/User';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
     }

  ngOnInit(): void {
  }

}
