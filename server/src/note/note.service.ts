import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NOTE_REPOSITORY } from './note.provider';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @Inject(NOTE_REPOSITORY)
    private noteRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    try {
      return this.noteRepository.save(createNoteDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll() {
    try {
      return this.noteRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: number) {
    try {
      return this.noteRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    try {
      return this.noteRepository.update(id, updateNoteDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  remove(id: number) {
    try {
      return this.noteRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
