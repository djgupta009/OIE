import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataSendService } from '../service/data-send.service';
import { AnimalModel } from '../model/animal.model';
import { Message } from 'primeng/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-addanimaldata',
  templateUrl: './addanimaldata.component.html',
  styleUrls: ['./addanimaldata.component.css'],
  providers: [MessageService]
})
export class AddanimaldataComponent implements OnInit {

  msgs: Message[] = [];
  animalForm: FormGroup;
  animalData: AnimalModel;

  constructor(private dataService: DataSendService,
  private mess: MessageService) { }

  ngOnInit() {
    this.animalForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      'type': new FormControl(null, Validators.required),
      'species': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      'gender': new FormControl(null, Validators.required),
      'weight': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
      'healthCondition': new FormControl(null, Validators.required),
      'allergic': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      'country': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      'about': new FormControl(null, Validators.required),
      'disease': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')])
    });
  }

  dataSubmitted() {
    this.animalData = new AnimalModel(this.animalForm.value);
    this.dataService.sendData(this.animalData).subscribe((res) => {
      this.msgs.push({severity:'success', summary:'Success!', detail:'Record has been added(click to close)'});
    },
      (err) => {
        if(err.status==504){
          this.msgs.push({severity:'error', summary:'Error! Record can\'nt be added ', detail:'Connection Timeout(click to close)'});
        }else{
          this.msgs.push({severity:'error', summary:'Error!', detail:'Cannot add Record(click to close)'});
        }
       
      });
  }

  hideGrowl(){
    this.msgs =[];
  }
  checkInputField(element: string) {
    let errors = this.animalForm.get(element).errors;
    let touched = this.animalForm.get(element).touched;
    if (touched && errors) {
      if (errors.required) {
        return (element + ' is required');
      } else if (errors.pattern) {
        return (element + ' can only have alphabets');
      }else if(errors.minlength){
        return (element + ' should have atleast 4 letters')
      }
      else return false;
    }
  }

  checkInputNumber(element: string) {
    let errors = this.animalForm.get(element).errors;
    let touched = this.animalForm.get(element).touched;
    if (touched && errors) {
      if (errors.required) {
        return (element + ' is required');
      } else if (errors.pattern) {
        return (element + ' can only have numbers');
      }
      else return false
    }
    else return false;
  }

  checkSelectField(element: string) {
    let touched = this.animalForm.get(element).touched;
    let data = this.animalForm.get(element).value;
    if (touched) {
      if (!data) {
        return 'You must select a ' + element;
      }
    }
    else return false;
  }

  formValid() {
    return !this.animalForm.valid;
  }
}
