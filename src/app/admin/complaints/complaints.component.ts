import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ComplaintService } from './complaints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit, OnDestroy{
  time;
  complains: { content: string, created_at: string, id: number, updated_at: string }[];
  content: string;
  id: number;
  editCH: string;
  showEditOptions = false;

  constructor(private complaintService: ComplaintService, private router: Router) { }

  ngOnInit() {
    this.complaintService.getAllComplaints().subscribe(
      data => {
        console.log(data);
        this.complains = [...data];
      },
      error => {
        console.log(error);
      }
    );

    this.time = setInterval(() => {
      this.complaintService.getAllComplaints().subscribe(
        data => {
          if ( JSON.stringify(this.complains) !==  JSON.stringify(data)) {
            console.log('update complaints');
            this.complains = [];
            this.complains = [...data];
          }
        },
        error => {
          console.log(error);
        }
      );
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.time);
    console.log('clear time conplaint' );
    
  }

  onAdd() {
    // console.log(this.f)
    console.log('form data :: ', this.content);
    this.complaintService.addComplain(this.content).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['/reload/admin/complaints']);
          return;
        } else {
          alert('error');
        }
      },
      error => {
        console.log(error);
      });
  }


  onEdit(id: number, content: string) {
    this.showEditOptions = true;
    this.content = content;
    this.id = id;
  }

  checkEdit() {
    if (this.editCH === this.content.trim()) {
      return true;
    }
    return false;
  }
  onSaveChange() {
    console.log('id:  ', this.id);
    console.log('content:  ', this.content);
    this.complaintService.updateComplain(this.id, this.content).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['/reload/admin/complaints']);
          return;
        } else {
          alert(data.success[0]);
        }
      },
      error => {
        alert(error);
      });
  }


  onDelete(id: number) {
    this.complaintService.deleteComplain(id).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['/reload/admin/complaints']);
          return;
        } else {
          alert(data.success[0]);
        }
      },
      error => {
        alert(error);
      });
  }
}
