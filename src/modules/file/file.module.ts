import { Module } from '@nestjs/common';
import { RotatingFileService } from './file.service';

const { MAX_LOG_FILE_SIZE, LOG_FILE_NAME, MAX_FILES_IN_ROW } = process.env;

@Module({
  providers: [
    RotatingFileService,
    {
      provide: 'FILE_NAME',
      useValue: LOG_FILE_NAME,
    },
    {
      provide: 'MAX_SIZE_KB',
      useValue: +MAX_LOG_FILE_SIZE,
    },
    {
      provide: 'MAX_FILES_IN_ROW',
      useValue: +MAX_FILES_IN_ROW,
    },
  ],
  exports: [RotatingFileService],
})
export class FileModule {}
