import { Component, OnInit } from '@angular/core';
//import{WelcomeComponent } from './welcome.component'
import{ Router } from '@angular/router'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  show:string ;

  model:any;
  fname = "";
  password = "";
  password2 = "";
  countries :any[] ;
  selectedCountryCode1:any;
  states:any;
  selectedState1:any;
  selectedCountryCode2:any;
  num1 :number;
  num2 :number;
  operation:any;
  expr :string;
  operations :any;
  captchaResult :any;
  op :any;
  actualCaptchaResult :any;
  display:string;


  
  selectedState2:any;
 
  //fnStatus :boolean =false ;

  constructor(private router :Router) { 
    this.show = "grp1";
    this.model ={};
    this.countries =  [
                      {name:"Australia" , code:"AUS"},
                      {name :"America", code:"US" },
                      {name:"Canada", code:"CA"},
                      {name :"India", code:"IN"},
                      {name:"Romainia", code:"RO"},
                      {name: "Russia",code:"RU"},
                      {name:"Switzerland",code:"SW"}
                    ];
    this. selectedCountryCode1= null;
    this.selectedState1 = null;
    this. selectedCountryCode2= null;
    this.selectedState2 = null;
    this.states = { "AUS": ["Australian Capital Territory","New South Wales","Northern Territory","Queensland","South","Australia","Tasmania","Victoria","Western Australia"],
                    "US" : ["Alabama.Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","New York", "Wisconsin","Wyoming"],
                    "IN" : ["Andhra Pradesh","Arunachal Pradesh","Assam,Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Odisha"],
                    "RO" : ["Alba","Arad","Arges","Bacau","Bihor","Bistrita-Nasaud","Botosani","Braila","Brasov","Bucuresti","Buzau"],
                    "RU" : ["Adygeya","Aginskiy Buryatskiy","Altay","Altayskiy","Amurskaya","Arkhangel","skaya","Astrakhanskaya","Bashkortostan"],
                    "SW" : ["Aargau","Ausser-Rhoden","Basel-Landschaft","Basel-Stadt","Bern","Fribourg","Geneve","Glarus","Graubunden","Inner-Rhoden","Jura,Luzern","Neuchatel"]
                    
    }
    this.num1= Math.round((100-10)*Math.random() +10 );
    
    this.num2= Math.round((100-10)*Math.random() + 10);
    this.operations = ['*','/','+','-'];
    this.expr = "";
    this.captchaResult = null;
    this.op ="";
    this.actualCaptchaResult = null;
    this.display = "form";

  }

  ngOnInit(): void {
  }

  

  showGrp2(){
    this.show = "grp2";
    

  }
  showGrp1(){
    this.show = "grp1";
  }
  genCaptcha(){ 
    this. num1     =  Math.round((100-10)*Math.random() +10 );
    this.num2      =  Math.round((100-10)*Math.random() + 10);
    let x          =  (Math.round(10*Math.random()))%4;
    this .op        =  this.operations[x]; 
    this.expr      =  this.num1 + this.op  + this.num2
}
validateCaptcha(){
 
  switch(this.op){
    case "+":
      this.actualCaptchaResult =this.num1 + this.num2;
      break;
    case "-":
      this.actualCaptchaResult =this.num1 - this.num2;
      break;
    case "*":
      this.actualCaptchaResult =this.num1 * this.num2;
      break;
    case "/":
      this.actualCaptchaResult =Math.floor(this.num1 / this.num2);
      break;
  }

}
  /*
  validateForm(regForm :any){
    console.log("submitted" +regForm);
    console.log(regForm)
  }*/
  save(s :any){
    console.log(s)
  }
  /*
  matchPasswords(){{}
    if(this.password !=this.password2){
      return true;
    }
    else{
      return false;
    }
  }*/
  /*checkGrp1(regForm:any){
   
    this.fnStatus=regForm.controls.fname.status;
    console.log(this.fnStatus)
    return this.fnStatus;


  }*/
  ngsubmit(){
    this.router.navigate(['welcome'])
  }

  action(){
    this.display = "welcome"
  }

}

