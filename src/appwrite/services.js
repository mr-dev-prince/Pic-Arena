import { Client, Account, ID, Databases } from "appwrite";

const appwriteclient = new Client();

class AppwriteServices {
  account;
  databases;
  constructor() {
    appwriteclient
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66c18c72001a73a27f77");

    this.account = new Account(appwriteclient);
    this.databases = new Databases(appwriteclient);
  }

  async createDocument(document) {
    const databse_id = "art-arena-db";
    const collection_id = "66c21cd60010a852dfe2";
    try {
      const doc = await this.databases.createDocument(
        databse_id,
        collection_id,
        ID.unique(),
        document
      );

      return doc;
    } catch (error) {
      throw error;
    }
  }

  async fileUpload({ file }) {
    const storage_id = "";
    try {
    } catch (error) {}
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
