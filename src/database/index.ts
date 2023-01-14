import { Database } from '@nozbe/watermelondb'
import SQLIteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schema';
import { User } from './model/User';

const adapter = new SQLIteAdapter({
    schema: schemas,
})

export const database = new Database({
    adapter,
    modelClasses: [User],
})