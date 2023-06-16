import mongoose from 'mongoose';
import { loadType } from'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose);


const TransactionSchema = new Schema(
  {
    buyer: {
      type: String, // anytime we get a currency, we need to divide by 100
      required: true,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  {
    timestamps: true, // gives current date of when Product was created
    toJSON: { getters: true }
  }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;