import { Client, Account, ID } from "appwrite";

const appwriteclient = new Client();

class AppwriteServices {
  account;
  constructor() {
    appwriteclient
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66c18c72001a73a27f77");

    this.account = new Account(appwriteclient);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async loginAccount({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logOutAccount() {
    try {
      return this.account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }
}

export default AppwriteServices;
