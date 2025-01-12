import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
    @IsString()
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Password is required' })
    password: string;
}
