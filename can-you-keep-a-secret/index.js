function createSecretHolder(secret) {
  return {
    setSecret(sec) {
      secret = sec;
    },

    getSecret() {
      return secret;
    },
  };
}

obj = createSecretHolder(5);
console.log(obj);
console.log(obj.getSecret());
console.log(obj.setSecret(2));
console.log(obj.getSecret());

// obj.getSecret();
// obj.setSecret(2);
// obj.getSecret();
