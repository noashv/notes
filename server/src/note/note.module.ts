import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { noteProvider } from './note.provider';
import { DatabaseModule } from 'src/database/database.modules';

@Module({
  imports: [DatabaseModule],
  controllers: [NoteController],
  providers: [...noteProvider, NoteService],
})
export class NotesModule {}
