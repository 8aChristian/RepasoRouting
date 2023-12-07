import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage{


  id:any = 1235467897
  constructor(private router:Router) { } 
  //inyectar el Router con nombre router


  redirectTo(){//La naegación a nudo enviando una variable 
    this.router.navigate(['/','tabs','nudo',this.id])
  }

}