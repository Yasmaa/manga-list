import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})

export class AuthService{

  user: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth){

    this.user=firebaseAuth.authState;
  
  }

  signup(email: string, password: string){
   this.firebaseAuth
   .createUserWithEmailAndPassword(email, password) 
   .then(value=>{
     console.log('Registration success!', value);
   })
   .catch(err=>{
     console.log('arror: ' , err.message);
   })
 }

 login(email: string, password: string) {
  this.firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
}

logout() {
  this.firebaseAuth.signOut();
}


GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.firebaseAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }
 


}