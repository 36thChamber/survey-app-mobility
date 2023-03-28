import React, {Component} from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

var uuid = require('uuid')

const firebaseConfig = {
  apiKey: "AIzaSyDuPnAw9MBb_SAas1Fvb1GaW4FUDVn2eU8",
  authDomain: "plano-mob.firebaseapp.com",
  databaseURL: "https://plano-mob-default-rtdb.firebaseio.com",
  projectId: "plano-mob",
  storageBucket: "plano-mob.appspot.com",
  messagingSenderId: "912974969131",
  appId: "1:912974969131:web:3726b65964663d96732d6e",
  measurementId: "G-F1WH515TEN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class MobilitySurvey extends Component{
    constructor(props){
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
            isSubmitted: false
        }
    }

    render(){
        var name = '';  
        var questions = '';
        
        if (this.state.studentName == '' && this.state.isSubmitted == false){
            name = <div>
                <h1>Por favor coloque seu nome</h1>
                <form onSubmit={this.studentNameSubmit}>
                    <input className="sName" type="text" placeholder="Seu Nome" ref="name" />
                </form>
            </div>;
        }
        else if (this.state.studentName !== ''&& this.state.isSubmitted == false) {
            name = <div>
                <h1>Bem vindo {this.state.studentName}!</h1>
            </div>;

            questions = <div>
                <h2>Questões</h2>
                <form onSubmit="">
                    <div className='card'>
                        <label>?????</label>
                        <input type="111" name="222" value="333">

                        </input>
                    </div>
                </form>
            </div>
    
        
        }

        return(
            <div>
               {name}

               =======================================

               {questions}

            </div>
        )
    }
}

export default MobilitySurvey