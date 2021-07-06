import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
} )
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  collapsed = true;

  constructor( private dataStorageService: DataStorageService ) { }

  ngOnInit(): void { }

  onSelect( feature: string ) {
    this.featureSelected.emit( feature );
  }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }
}
