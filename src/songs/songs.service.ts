import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongDocument } from './schemas/song.schema';
import { Model } from 'mongoose';
import { CreateSongDto } from './dto/create-song.dto';
import { CreateSingerDto } from './dto/create-singer.dto';
import { Singer, SingerDocument } from './schemas/singer.schema';
import { Album, AlbumDocument } from './schemas/album.schema';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) private songModel: Model<SongDocument>,
    @InjectModel(Singer.name) private singerModel: Model<SingerDocument>,
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
  ) {}

  async allSongs() {
    return await this.songModel
      .find()
      .populate('listSingers')
      .populate('author')
      .populate('relatedSingers.singer')
      .limit(1)
      .skip(0)
      .exec();
  }

  async allAlbums() {
    return await this.albumModel.find().exec();
  }

  async createSong(createSongDto: CreateSongDto) {
    return await new this.songModel({
      ...createSongDto,
      createdAt: new Date(),
    }).save();
  }

  async createSinger(createSingerDto: CreateSingerDto) {
    return await new this.singerModel({
      ...createSingerDto,
      createdAt: new Date(),
    }).save();
  }
}
