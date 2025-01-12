import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AppResolver } from './app.resolver';
import { ConfigModule } from './shared/module/config/config.module';
import { ConfigService } from './shared/module/config/config.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        JwtModule.registerAsync({
            global: true,
            imports: [ConfigModule],
            extraProviders: [ConfigService],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('jwtSecret'),
                signOptions: { expiresIn: '60m' },
            }),
        }),
        AuthModule,
        UsersModule,
    ],
    providers: [AppResolver],
})
export class AppModule {}
