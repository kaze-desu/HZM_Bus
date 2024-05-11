import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService{
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async validateOrCreateUser(username: string, password: string): Promise<User> {
    let user = await this.usersRepository.findOne({
      where: { username }
    });

    if (!user) {
      // 用户不存在，创建新用户
      user = this.usersRepository.create({ username, password });
      await this.usersRepository.save(user);
    }

    return user;
  }
}