class Github {
  constructor() {
    this.client_id = '809fd7f056fecee0270f',
      this.client_secret = '058a4e600990bf2f0750fb249c979d74260becf0'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile,

    }
  }
}