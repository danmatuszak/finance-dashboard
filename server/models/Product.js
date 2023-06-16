import mongoose from 'mongoose';
import { loadType } from'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose);


const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, // anytime we get a currency, we need to divide by 100
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
      },
    ],
  },
  {
    timestamps: true, // gives current date of when Product was created
    toJSON: { getters: true }
  }
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;