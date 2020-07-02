import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { UsersService } from "./UsersService";
import { Pipe, PipeTransform } from '@angular/core';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './interfaces/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class UsersComponent implements OnInit {

  public resultPesq: User[] = [];

  constructor(private usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listUsers();
  }

  dataSource: any = [];
  columnsToDisplay = ['id', 'name'];
  expandedElement: User | null;

  openDialog(user) {
    this.dialog.open(DetalhesComponent, {
      width: '850px',
      data: user
    });
  }

  listUsers(){
      this.usersService.listarUser().subscribe((data: User[]) => {
        this.resultPesq = data;
      },
      (error) => {
        this.resultPesq =[];
      });

  } 

}






