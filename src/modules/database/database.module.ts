import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/user/entities/user.entity';
import { UserModule } from 'src/modules/user/user.module';
import { Artist } from 'src/modules/artist/entities/artist.entity';
import { ArtistModule } from 'src/modules/artist/artist.module';
import { AlbumModule } from 'src/modules/album/album.module';
import { Album } from 'src/modules/album/entities/album.entity';
import { Track } from 'src/modules/track/entities/track.entity';
import { TrackModule } from 'src/modules/track/track.module';
import { FavsModule } from 'src/modules/favs/favs.module';
import { Favorites } from 'src/modules/favs/entities/fav.entity';

const { POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_USER, POSTGRES_DB } =
  process.env;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: POSTGRES_HOST || 'localhost',
      port: 5432,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      entities: [User, Artist, Album, Track, Favorites],
      synchronize: true,
      autoLoadEntities: true,
    }),

    UserModule,
    ArtistModule,
    AlbumModule,
    TrackModule,
    FavsModule,
  ],
})
export class DatabaseModule {}
