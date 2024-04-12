import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';




@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port:parseInt(process.env.DB_PORT),
      username:process.env.DB_USERNAME,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.DB_NAME,
      autoLoadEntities:true,// 
      synchronize:true, //cuando hacemos un cambio en las entidades automaticamente las sincroniza, esto es bueno en dev
    }),
    ProductsModule,
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
