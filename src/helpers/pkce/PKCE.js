/**
 * PKCE.js
 * 
 * Helper class that creates a random code_verifier and an encoded code_challenge.
 */

import crypto from 'crypto';

export default class PKCE {

  createCodeVerifier() {
    return this.base64URLEncode(crypto.randomBytes(43));
  }

  createCodeChallenge(codeVerifer) {
    return this.base64URLEncode(this.sha256(codeVerifer));
  }

  base64URLEncode(value) {
    return new Buffer(value).toString("base64")
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  }

  sha256(value) {
    return crypto.createHash('sha256').update(value).digest();
  }
}