import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

enum Role {
  USER,
  ADMIN,
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
  @Prop({})
  class: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
