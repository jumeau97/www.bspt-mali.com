import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private generalService: GeneralService) {

  }
  ngOnInit(): void {}

  getcurrentUser(){
    this.generalService.getCurrentUser().subscribe({
      next:(result:any)=>{
        console.log("result", result);

        this.user=result.user;
        
      },
      error:(error:any)=>{}
    });
  }
}
