import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'my-dream-app';
  userList:any;
  userDetails:any;
  getId;
constructor(private _user: UserService , private _router: Router){

}

  ngOnInit(){
 this._user.getUser().subscribe(data => this.userList=data)
  // console.log('this.userList dgfdg');
  // this.test(3);
  }

  test(ctr:Number){
    // console.log(this.userList);
     this.getId=ctr;
     this._router.navigate(['userDetails', this.getId])
    //  this._user.userDetails(ctr).subscribe(data=>this.userDetails=data);
     console.log(this.getId);
    //  console.log(this.userDetails);
     }

}
