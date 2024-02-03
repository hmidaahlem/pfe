import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent implements OnInit {
  mainForm!:FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.onmainform();
  }
onmainform():void{
  this.mainForm=this.builder.group({});
}
onSubmitForm(){
  
}
}
