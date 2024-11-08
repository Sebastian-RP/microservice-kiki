import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DeliveryModule } from './delivery/delivery.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    DeliveryModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get('database.host'),
          port: +configService.get<number>('database.port'),
          username: configService.get('database.username'),
          password: configService.get('database.password'),
          database: configService.get('database.name'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true, // Don't use this option for prod mode
          keepConnectionAlive: true,
          timezone: 'UTC',
          ssl: configService.get('database.ssl'),
          extra: configService.get('database.ssl') ? {
              ssl: {
                  rejectUnauthorized: false
              }
          } : null,
          autoLoadEntities: true
        }),
      inject: [ConfigService]
      }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}