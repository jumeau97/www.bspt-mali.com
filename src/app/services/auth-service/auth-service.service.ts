import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { User } from 'src/app/model/User';
import { myConstants } from 'src/app/views/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  // token: any;
  user: User | any = new User();
  roles: any[] = [];

  constructor() {}

  isAuthenticatedUser() {
    // this.token = null;
    let storeData = sessionStorage.getItem('bstp-agent');
    console.log('session storage', storeData);

    if (storeData) {
      const decryptedBytes = CryptoJS.AES.decrypt(
        storeData,
        myConstants.password
      );
      const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
      // this.token = JSON.parse(decryptedData);
      this.user = JSON.parse(decryptedData);

      // this.setAuthToken(this.token.token);
      return this.user;
    }
    // this.token = { status: 0 };
    return this.user;
  }
}
