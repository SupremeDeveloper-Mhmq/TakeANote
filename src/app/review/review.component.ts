import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../Shared/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  isLoading = false;
  constructor(private Data: DataService) {}
  onSubmitReview(ReviewForm: { Subject: string; Text: string }) {
    this.isLoading = true;
    console.log(ReviewForm);
    this.Data.onStoreReview(ReviewForm).subscribe((resData) => {
      this.isLoading = false;
      Swal.fire('Added', 'Added Review And Its Description', 'success');
      console.log(resData);
    });
  }
  ngOnInit(): void {}
}
