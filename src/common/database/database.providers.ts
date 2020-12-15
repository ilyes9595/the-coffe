import * as mongoose from 'mongoose';
import { DB_HOST, DB_PORT, DB_NAME, DB_PROVIDER } from '../config';
export const DatabaseProviders = [
  {
    provide: DB_PROVIDER,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect(
        'mongodb://' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME,
        { useNewUrlParser: true, useUnifiedTopology: true });
    },
  },
];
