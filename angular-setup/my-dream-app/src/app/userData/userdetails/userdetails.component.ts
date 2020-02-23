import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent{

  UserId: number;
  details: any;
   constructor(private _userDetails: UserService,private _router: ActivatedRoute) { 
     this.UserId = parseInt(this._router.snapshot.paramMap.get('id'));
   }
 
   ngOnInit(){
     this._userDetails.userDetails(this.UserId).subscribe(data=>this.details=data); 
   }
 
}
