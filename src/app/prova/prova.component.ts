import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import {MatExpansionModule} from '@angular/material/expansion';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css',
  standalone: true,
  imports: [MatGridListModule, MatCardModule,MatExpansionModule,MatIconModule, MatButtonModule, MatToolbarModule,MatMenuModule ],
})
export class ProvaComponent {

 


}

