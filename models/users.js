import {Schema, model, models} from 'mongoose';
import { unique } from 'next/dist/build/utils';

const UserSchema = new Schema({

    email:{
        type: String,
        unique: [true, 'email already exist'],
        required: [true, 'Email is required'] 

    },
    username: {
      type: String,
      required: [true, 'Username is required']

    },
    Image:  {
        type: String
    },
    bookmarks: [
        {

            type:  Schema.Types.ObjectId,
            ref: 'property'


        }
    ]
},{
    timestamps: true
    });


    const User = models.user || model('User', UserSchema);
    