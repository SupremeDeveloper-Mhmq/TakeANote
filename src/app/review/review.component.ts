import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  constructor() {}
  onSubmitReview(ReviewForm: NgForm) {
    console.log(ReviewForm.value);
    ReviewForm.reset();
  }
  ngOnInit(): void {}
}
