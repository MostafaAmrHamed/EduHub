import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  phoneNumber: string;
  @Prop({ type: String, enum: Role, default: Role.USER })
  role: Role;
  @Prop({ required: true })
  class: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function () {
  if (!this.isNew) {
    return;
  }

  const hashedPassword = await bcrypt.hash(this.password, 12);

  this.password = hashedPassword;
});
