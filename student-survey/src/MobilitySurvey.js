import React, {Component} from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var firebaseConfig = {
    apiKey: "AIzaSyDuPnAw9MBb_SAas1Fvb1GaW4FUDVn2eU8",
    authDomain: "plano-mob.firebaseapp.com",
    databaseURL: "https://plano-mob-default-rtdb.firebaseio.com",
    projectId: "plano-mob",
    storageBucket: "plano-mob.appspot.com",
    messagingSenderId: "912974969131",
    appId: "1:912974969131:web:3726b65964663d96732d6e",
    measurementId: "G-F1WH515TEN"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

class MobilitySurvey extends Component{
    constructor(){
        super(props);

        this.state={
            uid:uuid.v1(),
            studentName:'',
            awnsers:{
                ans1:'',
                ans2:'',
                ans3:'',
                ans4:'',
                ans5:'',
            },
            isSubmitted:false
        }
    }

    render(){
        var name = '';
        var questions = '';
        
        if (this.state.studentName == '' && this.state.isSubmitted == false){
            name = <div>
                <h1>Hey! Please enter your name.</h1>
                <form>
                    <input className="sName" type="text" placeholder="Please enter your name" ref="name" />
                </form>
            </div>
        }
        return(
            <div>
                I am mob survey component
            </div>
        )
    }
}

export default MobilitySurvey