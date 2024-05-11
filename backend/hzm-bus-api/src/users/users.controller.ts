import { Controller, Post, Body, HttpException, HttpStatus, Logger} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private  usersService: UsersService) {}

  @Post('login')
  async login(@Body() body: any): Promise<any> {
      this.logger.log(`Received login request with username: ${body.username}`);
      try {
          const user = await this.usersService.validateOrCreateUser(body.username, body.password);
          this.logger.log(`Login successful for username: ${body.username}`);
          return { status: 'success', message: 'Login successful', user };
      } catch (error) {
          this.logger.error(`Login failed for username: ${body.username} with error: ${error.message}`);
          throw error;
      }
  }
}
