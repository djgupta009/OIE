import { Component, OnInit } from '@angular/core';
import { DataSendService } from '../../service/data-send.service';
import { ActivatedRoute} from '@angular/router';
import { AnimalDatabaseModel } from '../../model/animal.database.model';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  constructor(
    private dataServ: DataSendService,
    private actRoute: ActivatedRoute) { }

  currentTranslation: AnimalDatabaseModel;
  reportId: string;
  language: string;

  ngOnInit() {
    this.actRoute.params.subscribe(res => {
      this.reportId  = res['reportid'];
      this.language  = res['language'];
      this.getTranslations();           
    });
  }

  getTranslations(){
    this.dataServ.recieveData(this.reportId, this.language).subscribe((res) => {
      console.log(res);
      this.currentTranslation = res as AnimalDatabaseModel;
    }, (err) => {
      alert(err);
    });
  }

}
