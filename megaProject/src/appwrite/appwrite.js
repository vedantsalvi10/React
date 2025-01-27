import {conf} from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor (){
    this.client.setEndpoint(conf.appwrite_url)
    .setProject(conf.appwrite_Project_ID);
    account = new Account(this.client);
  }

  async createAccount({email,password,name}){
      try{
        const userAccount = await this.account.create(ID.unique(), email, password, name);
        if(userAccount){
          //call another method
          return this.logIN(email,password);
        }
        else{
          return userAccount;
        }
      }catch(error){
         throw error
      }
  }
  async logIN({email,password}){
    try{
        return await this.account.createEmailPasswordSession(email,password);
    }catch(error){
      console.log("ERROR :: LOGINERROR ::",error);
    }
  }
  async checkAccount(){
    try{
    return await this.account.get();
    }catch(error){
      console.log("ERROR :: CHECKACCOUNT :: ",error)
    }
  }
  async logOUT (){
    try{
      return await this.account.deleteSessions();
    }catch(error){
      console.log("ERROR :: LOGOUT :: ",error)
    }
  }
}

const authService = new AuthService()
export default authService;