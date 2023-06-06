import apiNames from '../apiNames';
import {Repository, SecureRepository} from '../baseURLRepo';

export default {
  loginApi(payload) {
    return Repository.post(apiNames, payload);
  },
  registrationApi(payload) {
    return SecureRepository.post(apiNames.registration, payload);
  },
};
