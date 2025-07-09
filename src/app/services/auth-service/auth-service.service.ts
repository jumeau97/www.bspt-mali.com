import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { myConstants } from 'src/app/views/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  token: any;

  constructor() {}

  isAuthenticatedUser() {
    let storeData = sessionStorage.getItem('bstp-agent');

    if (storeData) {
      const decryptedBytes = CryptoJS.AES.decrypt(
        storeData,
        myConstants.password
      );
      const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);

      this.token = JSON.parse(decryptedData);

      // this.setAuthToken(this.token.token);
      return this.token;
    }
    // this.token = { status: 0 };
    return this.token;
  }
}
