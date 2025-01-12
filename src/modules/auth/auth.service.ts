import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async signIn(
        email: string,
        password: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.findOneByEmail(email);
        if (user?.password !== password) {
            throw new UnauthorizedException();
        }
        const payload = {
            sub: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        };
        return {
            access_token: await this.jwtService.signAsync(payload, {
                secret: this.configService.get<string>('JWT_SECRET'),
            }),
        };
    }
}
