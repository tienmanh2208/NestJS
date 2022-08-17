import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up')
  async signUp(@Body() signUpDto: SignUpDto) {
    return await this.authService.createUser(signUpDto);
  }

  @Post('/sign-in')
  async signIn(@Body() signInDto: SignUpDto) {
    return await this.authService.signIn(signInDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  async getMe(@Req() req) {
    return { user: req.user };
  }
}
