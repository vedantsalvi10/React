import { conf } from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

console.log("Appwrite URL: ", conf.appwrite_url); 

if (!conf.appwrite_url) {
  throw new Error("Appwrite URL is undefined! Check your .env file.");
}
export class AuthService {
  client;
  account;

 
  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(conf.appwrite_url)
      .setProject(conf.appwrite_Project_ID);
    
    this.account = new Account(this.client); 
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.logIN({ email, password }); 
      }
      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async logIN({ email, password }) {
    try {
      console.log("🔹 Logging in...");
      const session = await this.account.createEmailPasswordSession(email, password);
      console.log("✅ Login successful:", session);
      
      const user = await this.checkAccount();
      if (!user) {
        console.warn("❌ User data not found after login.");
        return null;
      }
  
      return user;
    } catch (error) {
      console.error("❌ ERROR :: LOGIN ERROR ::", error);
      return null;
    }
  }
  

  async checkAccount() {
    try {
      console.log("🔹 Checking user session...");
      const user = await this.account.get();
      console.log("✅ User Data:", user);
      return user;
    } catch (error) {
      if (error.code === 401) {
        console.warn("❌ User is not logged in! Redirecting to login page...");
        return null; // Prevents app crash
      }
      console.error("❌ ERROR :: CHECKACCOUNT :: ", error);
      return null;
    }
  }
  
  
  async logOUT() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("ERROR :: LOGOUT :: ", error);
    }
  }
}

const authService = new AuthService();
export default authService;
