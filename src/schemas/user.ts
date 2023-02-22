import { Document, Schema, Model, model} from 'mongoose';
import { IUser } from '../interfaces/iuser';


export interface IUserModel extends IUser, Document {
   
}
  
export var UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
}, { timestamps: true });

  
export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);