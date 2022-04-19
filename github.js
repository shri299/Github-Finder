class GitHub {
    constructor()
    {
        this.client_id = 'a8a34c645aa0e8fd7cb8';
        this.client_secret = 'ab8f45211ca96ef29bb5ba410a9decf1a6639c26';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret} `);
        const profile = await profileResponse.json(); 

        return {
            profile
        }
    }
}