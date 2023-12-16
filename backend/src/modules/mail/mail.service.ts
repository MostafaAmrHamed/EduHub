import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { loginDetails } from './template/loginDetails.template';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendLoginDetails(
    userEmail: string,
    loginDetail: { username: string; password: string },
  ) {
    this.mailerService.sendMail({
      to: userEmail,
      subject: 'Your Login Details',
      text: 'Hello',
      html: loginDetails(userEmail, loginDetail),
      attachments: [
        {
          filename: 'logo.png',
          path: process.cwd() + '/assets/logo.png',
          cid: 'logo', //my mistake was putting "cid:logo@cid" here!
        },
        {
          filename: 'wave.png',
          path: process.cwd() + '/assets/wave.png',
          cid: 'wave', //my mistake was putting "cid:logo@cid" here!
        },
        {
          filename: 'girl.png',
          path: process.cwd() + '/assets/girl.png',
          cid: 'girl', //my mistake was putting "cid:logo@cid" here!
        },
      ],
    });
  }
}
