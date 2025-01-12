import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppResolver } from './app.resolver';
import { ConfigModule } from './shared/module/config/config.module';
import { ConfigService } from './shared/module/config/config.service';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';

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
        UserModule,
    ],
    providers: [AppResolver],
})
export class AppModule {}
