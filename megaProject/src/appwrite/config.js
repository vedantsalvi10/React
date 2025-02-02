import {conf} from "../conf/conf.js";
import { Client, Databases, ID, Query, Storage } from "appwrite";
import authService from "../appwrite/AuthService"; 

export class Service {
 client = new Client()
 database;
 storage;
 constructor (){
  this.client
    .setEndpoint(conf.appwrite_url)
    .setProject(conf.appwrite_Project_ID);

  this.database = new Databases(this.client);
  this.storage = new Storage(this.client);    
}

 async addData({tittle,slug,content,image,status,userID}){
   try{
     return await this.database.createDocument(
      conf.appwrite_Database,
      conf.appwrite_Collection,
      slug,
      {
        tittle,
        content,
        image,
        status,
        userID
      }
     )
   }catch(error){
    console.log("APPWRITE PROJECT :: CREATEDATA ERROR :: ",error);
   }
 }
 async updateData(slug,{tittle,content,image,status}){
  try{
    return await this.database.updateDocument(
      conf.appwrite_Database,
      conf.appwrite_Collection,
      slug,
      {
        tittle,
        content,
        image,
        status
      }
    )
  }catch(error){
   console.log("APPWRITEERROR :: UPDATEDATABASE ERROR :: ",error);
  }
 }
 async deleteData(slug){
  try{
   await this.database.deleteDocument(
      conf.appwrite_Database,
      conf.appwrite_Collection,
      slug
   )
   return true;
  }catch(error){
    console.log("APPWRITEPROJECT :: DELETEDOCUMENTERROR :: ",error);
    return false;
  }
 }
async getPost(slug){
  try{
    return await this.database.getDocument(
      conf.appwrite_Database,
      conf.appwrite_Collection,
      slug
    )
    
  }catch(error){
    console.log("APPWRITEERROR :: GETPOST ERROR :: ",error);
    return false;
  }
}
async viewPost(query = [Query.equal('status', 'active')]) {
  try {
    const user = await authService.checkAccount();
    if (!user) {
      console.warn("❌ Cannot fetch posts. User is not logged in.");
      return false; // Prevent unauthorized request
    }

    return await this.database.listDocuments(
      conf.appwrite_Database,
      conf.appwrite_Collection,
      query
    );
  } catch (error) {
    console.error("❌ APPWRITE ERROR :: GETPOST ERROR ::", error);
    return false;
  }
}


async uploadFile(file){
  try{
   return await this.storage.createFile(
    conf.appwrite_Bucket,
    ID.unique(),
    file
   )
  }catch(error){
    console.log("APPWRITEPROJECT :: UPLOADFILE ERROR :: ",error);
    return false
  }
}
async deleteFile(fileID){
  try{
    await this.storage.deleteFile(
        conf.appwrite_Bucket,
        fileID
    );
    return true;
  }catch(error){
    console.log("APPWRITEPROJECT :: DELETEFILE ERROR :: ",error);
    return false;
  }
}
filePreview(fileID){
  conf.appwrite_Bucket,
  fileID
}
}

const service = new Service()
export default service;