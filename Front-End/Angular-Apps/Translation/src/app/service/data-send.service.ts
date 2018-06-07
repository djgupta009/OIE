import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment  } from '../../environments/environment';
import { AnimalModel } from '../model/animal.model';

@Injectable()
export class DataSendService {

  constructor(private httpClient: HttpClient) { }

  sendData(animalData: AnimalModel){
    let addAnimalRequest = environment.serverUrl + 'addanimaldetail';
    console.log(animalData);
    return this.httpClient.post(
      addAnimalRequest,
      animalData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': environment.userUrl,
          'Cache-control': 'no-cache',
          'Expires': '0',
          'Pragma': 'no-cache'
          })
      }
    )
  }

  getEnglishData(){
    let addAnimalRequest = environment.serverUrl + 'animals';
    return this.httpClient.get(addAnimalRequest)
  }

  recieveData(reportId: string,language: string){
    let getTranslation = environment.serverUrl + 'animal/' + reportId +'/'+ language;
    console.log(getTranslation);
    return this.httpClient.get(getTranslation);
  }
}