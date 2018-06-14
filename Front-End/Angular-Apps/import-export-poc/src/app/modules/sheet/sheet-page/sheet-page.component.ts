import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-sheet-page',
  templateUrl: './sheet-page.component.html',
  styleUrls: ['./sheet-page.component.css']
})
export class SheetPageComponent implements OnInit {
  dtable = { }
  exportableData:any;
  tableInfo = {}
  exportForm: FormGroup;
  filenames = [
    ['sheet.csv'],
    ['sheet.xlsx']
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.exportForm = this.fb.group({
      'exportType':'0'
    })
  }

  exportType() : FormControl{
    return this.exportForm.get('exportType') as FormControl;
  }

  //# event to read file data
  changeListener(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e:any) =>{
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr,{ type:'binary'});
      const wsname:string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.exportableData = XLSX.utils.sheet_to_json(ws, {header: 1});
      this.tableInfo = this.createListOfTableData(XLSX.utils.sheet_to_json(ws, {header: 1}));
    }
    reader.readAsBinaryString(target.files[0]);
  }

  
  createListOfTableData(data:any){
    var tempDataContainer = [];
    if(data.length && data.length > 0){
      this.dtable['headings'] = data[0];
      for(var i=1;i< data.length;i++){
        tempDataContainer.push(data[i]) 
        this.dtable['tds'] = tempDataContainer;
      }
    }
    return this.dtable;
  }

  submitForm(data){
    var tempArray = []
    this.exportableData.forEach(element => {
      tempArray.push(element)
    });
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(tempArray);
    XLSX.utils.book_append_sheet(wb, ws, 'SheetJSNew');
    if(data.value.exportType == '2'){
    XLSX.writeFile(wb,'sheet-excel.xlsx',{bookSST: true});
    }
    else{
      XLSX.writeFile(wb,'sheet-csv.csv',{bookSST: true});  
    }
  }

}
