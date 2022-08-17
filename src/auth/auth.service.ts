import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(signUpDto: SignUpDto) {
    const { username, password } = signUpDto;
    const saltedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      username,
      password: saltedPassword,
    });

    await this.userRepository.save(user);
    return user;
  }

  async signIn(signInDto: SignUpDto) {
    const { username, password } = signInDto;

    const user = await this.userRepository.findOneBy({ username });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    if (await bcrypt.compare(password, user.password)) {
      const payload = { username };
      const token = this.jwtService.sign(payload);
      return { token };
    } else {
      throw new UnauthorizedException('Invalid token!');
    }
  }
}
