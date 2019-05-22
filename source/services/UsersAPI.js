import axios from 'axios';
import { USERS_BATCH_SIZE, USERS_DEFAULT_NATIONALITY } from '../framework/constants';

class UsersAPI {
  apiURL = 'https://randomuser.me/api';

  getUsers = (count = USERS_BATCH_SIZE, nationality = USERS_DEFAULT_NATIONALITY) => {
    const params = {
      results: count,
      nat: nationality
    };

    return axios.get(this.apiURL, { params });
  }
}

export default new UsersAPI();
