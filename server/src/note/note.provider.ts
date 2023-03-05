import { DataSource } from 'typeorm';
import { Provider } from '@nestjs/common';
import { Note } from './entities/note.entity';
import { DATA_SOURCE } from 'src/database/database.providers';

export const NOTE_REPOSITORY = 'NOTE_REPOSITORY';

export const noteProvider: Provider[] = [
  {
    provide: NOTE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Note),
    inject: [DATA_SOURCE],
  },
];
