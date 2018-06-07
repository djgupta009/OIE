import { Component, OnInit } from '@angular/core';
import { AnimalDatabaseModel } from '../model/animal.database.model';
import { Router } from '@angular/router';
import { DataSendService } from '../service/data-send.service';

@Component({
  selector: 'app-translation-list',
  templateUrl: './translation-list.component.html',
  styleUrls: ['./translation-list.component.css']
})
export class TranslationListComponent implements OnInit {

  constructor(private router: Router,
  private dataSer: DataSendService) { }

  language: string[]=[];
  recordsList: AnimalDatabaseModel[] = [];
  loadingFlag = 1;
  noDataFlag = 0;
  //to get the english translation of the records for the displaying

  ngOnInit() {
    this.dataSer.getEnglishData().subscribe( res=>{
      this.recordsList = res as AnimalDatabaseModel[];
      this.loadingFlag = 0;
    },(error)=>{
      if(error.status==0){
          this.loadingFlag = 0;
          this.noDataFlag = 1;
      }
    });
    // this.recordsList =[
    //   {"animal_id":"AA01","type":"tiger","name":"simba"},
    //   {"animal_id":"AA02","type":"giraffe","name":"honda"},
    //   {"animal_id":"AA03","type":"snake","name":"kobra"}
    // ];
  }

  selectedAnimalData: AnimalDatabaseModel;

  translateToSelctedLanguage(reportId: string, currentSelectedlanguage: string){
      this.router.navigate(['animal',reportId,currentSelectedlanguage]);
  }

  changeLanguage(event: any, index: number){
    this.language[index] = event.target.value;
  }

  languageChangedCheck(index: number, event: any){
    if(this.language[index]==undefined){
      return true;
    }else{
      return false;
    }
  }

}
