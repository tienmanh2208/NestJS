import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Song, SongSchema } from './schemas/song.schema';
import { Singer, SingerSchema } from './schemas/singer.schema';
import { Album, AlbumSchema } from './schemas/album.schema';

@Module({
  controllers: [SongsController],
  providers: [SongsService],
  imports: [
    MongooseModule.forFeature(
      [
        { name: Song.name, schema: SongSchema },
        { name: Singer.name, schema: SingerSchema },
      ],
      'song',
    ),
    MongooseModule.forFeature(
      [{ name: Album.name, schema: AlbumSchema }],
      'album',
    ),
  ],
})
export class SongsModule {}
