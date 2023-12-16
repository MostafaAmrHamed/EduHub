import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Module({
  exports: [MailService],
  controllers: [MailController],
  providers: [MailService],
  imports: [
    MailerModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const email = configService.get('email');
        const password = configService.get('password');
        return {
          transport: `smtps://${email}:${password}@smtp.gmail.com`,
          defaults: {
            from: `"EduHub Support Team" <${email}>`,
            subject: 'Welcome to EduHub',
          },
          template: {},
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class MailModule {}
