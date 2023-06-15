import mongoose from 'mongoose';
import { loadType } from'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
  },
  { toJSON: { getters: true } }
)

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
  },
  { toJSON: { getters: true }}
)

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, // anytime we get a currency, we need to divide by 100
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100, 
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: 'USD',
        get: (v) => v / 100, 
      }
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema]
  },
  {
    timestamps: true, // gives current date of when KPI was created
    toJSON: { getters: true }
  }
);

const KPI = mongoose.model('KPI', KPISchema);

export default KPI;