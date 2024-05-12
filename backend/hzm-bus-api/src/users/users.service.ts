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

  //验证用户是否存在\是否合法，否则创建新用户
  async validateOrCreateUser(username: string, password: string): Promise<User> {
    let user = await this.usersRepository.findOne({
      where: { username, password}
    });

    if (user == null) {
      // 创建新用户
      user = this.usersRepository.create({ username, password });
      await this.usersRepository.save(user);
      return user;
    }
    else if(user.password != password){ //密码错误
      throw new Error('Password is incorrect!');
    }
    else if(user.username == username && user.password == password){
      return user;//登陆成功，返回user
    }
    else{
      throw new Error('Unknown error!');
    }
  }
}