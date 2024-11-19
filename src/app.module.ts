import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigurationModule } from './config/config/config.module';
import { LoggingMiddleware } from 'src/app/middlewares/logging.middleware';import { UserModule } from './app/module/user/user.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/global/LoggingInterceptor';

@Module({
  imports: [
    ConfigurationModule,
    UserModule
  ],
  controllers: [],
  providers: [    {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  },],
})
export class AppModule implements NestModule {
  static allowedOrigins: string[] | null;

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
