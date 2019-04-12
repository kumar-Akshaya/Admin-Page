import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprovalServiceService } from '../Service/approval-Service/approval-service.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  constructor(private approval: ApprovalServiceService, private router: Router) { }

  isclick: boolean = false;
  appArray: any = [];
  ansArray: any = [];
  model = {};
  model1 = {};
  ngOnInit() {
    this.getAllUsers();

  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }

  showUsers() {
    this.isclick = !this.isclick;
    if (this.isclick == true) {
      this.router.navigate(['dashboard']);
    }
    else {
      this.router.navigate(['approval']);
    }
  }

  getAllUsers() {
    this.approval.getUserList().subscribe(data => {
      console.log("responce data ", data);
      this.appArray = data['data'];
      var answer = this.toValidData(data);
      console.log("after filter ", answer)
      // for (let index = 0; index < this.appArray.length; index++) {
      //  console.log(this.appArray[index].message);
      // }
      console.log("approval user list ", this.appArray);
    },
      err => {
        console.log("Something went Wrong ");
      })
  }

  toValidData(data) {
    data.data.forEach(function (respond) {
      respond.message = String(respond.message)
        .replace(/<[^>]+>/gm, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&rsquo;/, '\'')
        .replace(/(&ldquo;)|(&rdquo;)/g, '"');
    });
    return data;
  }

  approvalAnswer(item) {
    var body = item.parentId;
    console.log("parent Id of note", body)
    this.approval.changeRes(body).subscribe(data => {
      this.model = data;
      console.log("approval ", this.model);
      if ((this.model as any).data.success === true) {
        this.getAllUsers();
      }
    })
  }

  unApproveAnswer(item) {
    var body = item.parentId;
    this.approval.changeApp(body).subscribe(data => {
      this.model1 = data;
      console.log("unApproval", this.model1)
      if ((this.model1 as any).data.success === true) {
        this.getAllUsers();
      }
    })
  }
}
