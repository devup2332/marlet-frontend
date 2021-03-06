import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMessage } from 'src/app/shared/models/message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  sendMessage(message: IMessage): void {
    if (this.contactForm.invalid) {
      Object.values(this.contactForm.controls).forEach(control => control.markAllAsTouched())
      return
    }
    console.log(message)
  }

  get name() {
    return (
      this.contactForm.get('name').hasError('required') &&
      (this.contactForm.get('name').touched ||
        this.contactForm.get('name').dirty)
    );
  }

  get phone() {
    return (
      this.contactForm.get('phone').hasError('required') &&
      (this.contactForm.get('phone').touched ||
        this.contactForm.get('phone').dirty)
    );
  }

  get subject() {
    return (
      this.contactForm.get('subject').hasError('required') &&
      (this.contactForm.get('subject').touched ||
        this.contactForm.get('subject').dirty)
    );
  }

  get email() {
    return (
      this.contactForm.get('email').hasError('required') &&
      (this.contactForm.get('email').touched ||
        this.contactForm.get('email').dirty)
    );
  }

  get message() {
    return (
      this.contactForm.get('message').hasError('required') &&
      (this.contactForm.get('message').touched ||
        this.contactForm.get('message').dirty)
    );
  }
}
