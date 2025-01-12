import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { AppResolver } from './app.resolver';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: configuration().JWT_SECRET,
            signOptions: { expiresIn: '60s' },
        }),
        ConfigModule.forRoot(),
        AuthModule,
        UsersModule,
    ],
    providers: [AppResolver],
})
export class AppModule {}
