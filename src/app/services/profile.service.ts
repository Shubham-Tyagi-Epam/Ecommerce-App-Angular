import { Injectable } from '@angular/core';
import { Profile } from '../Profile';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  varCustId = "custId";
  c_id:any = localStorage.getItem(this.varCustId);
  constructor(private restService:RestService) { 
    this.getProfileFromRestService();
  }

  profileData!:Profile;
  getProfileData(){
    return this.profileData;
  }
  getProfileFromRestService(){
    this.restService.getProfileById(this.c_id).subscribe({
      next : (data:any)=>{
        console.log(data);
        this.profileData = data;
        console.log(this.profileData);
      },
      error : (err)=>{
        return err.error;
      }
    });
  }

  insertProfileData(profileObj:Profile){
    this.restService.insertProfile(profileObj).subscribe({
      next : (data)=>{
          return data;
      },
      error : (err)=>{
        return err.error;
      }
    });
  }

  updateProfile(profileObj:Profile){
    this.restService.updateProfile(profileObj).subscribe({
      next : (data)=>{
          this.getProfileFromRestService();
          return data;
      },
      error : (err)=>{
        return err.error;
      }
    });
  }
}
