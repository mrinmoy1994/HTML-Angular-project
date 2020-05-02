import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private _transporter: nodemailer.Transporter;
  constructor() {
    // this._transporter = nodemailer.createTransport(
    //   `smtps://<username>%40gmail.com:<password>@smtp.gmail.com`
    // );
  }
  sendMail(to: string, subject: string, content: string) {
    debugger
    let options = {
      from: 'mrinmoy.biswas215@outlook.com',
      to: to,
      subject: subject,
      text: content
    }

    this._transporter.sendMail(
      options, (error, info) => {
        if (error) {
          return console.log(`error: ${error}`);
        }
        console.log(`Message Sent ${info.response}`);
      });
  }

}
