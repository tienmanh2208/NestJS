import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { CreateSingerDto } from './dto/create-singer.dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  allSongs() {
    return this.songsService.allSongs();
  }

  @Get('albums')
  allAlbums() {
    return this.songsService.allAlbums();
  }

  @Post()
  createSong(@Body() createSongDto: CreateSongDto) {
    return this.songsService.createSong(createSongDto);
  }

  @Post('/singer')
  createSinger(@Body() createSingerDto: CreateSingerDto) {
    return this.songsService.createSinger(createSingerDto);
  }
}
