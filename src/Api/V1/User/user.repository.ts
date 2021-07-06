import { EntityRepository, Repository } from 'typeorm';
import User from './User.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository()
export class UserRepository extends Repository<User> {
  constructor() {
    super();
  }

  async createUSer(user): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 12);

    const new_user = {
      name: user.name,
      email: user.email,
      contact: user.contact,
      password: hashedPassword,
    };

    return await this.save(new_user);
  }

  async getUSers(): Promise<User[]> {
    return this.find();
  }
}
