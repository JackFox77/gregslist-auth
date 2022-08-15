import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Cars = mongoose.model('Car', AccountSchema)
  Houses= mongoose.model('House', AccountSchema)
}

export const dbContext = new DbContext()
