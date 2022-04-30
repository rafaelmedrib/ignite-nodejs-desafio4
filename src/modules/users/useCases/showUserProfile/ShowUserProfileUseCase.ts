import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error(`Oops! Couldn't find any user with the id ${user_id}`);
    }
    return user;
  }
}

export { ShowUserProfileUseCase };
