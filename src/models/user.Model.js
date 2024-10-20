// import { Type } from "lucide-react";
import mongoose , {Schema} from "mongoose";

const orderSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
  });
  
  const inCartSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
  });

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    orders: {
        type: Number,
        required: true
    },
    inCart: {
        type: String,
        required: true
    },
    orders: [orderSchema],
    inCart: [inCartSchema],
}, {});

export const User = mongoose.models.Users || mongoose.model('Users', userSchema);
