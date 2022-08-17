import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      'mongodb://admin:admin@localhost:27018?retryWrites=false&w=majority',
      {
        connectionName: 'song',
        dbName: 'songs',
      },
    ),
    MongooseModule.forRoot(
      'mongodb://admin:admin@localhost:27018?retryWrites=false&w=majority',
      {
        connectionName: 'album',
        dbName: 'albums',
      },
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BooksModule,
    AuthModule,
    SongsModule,
  ],
})
export class AppModule {}
