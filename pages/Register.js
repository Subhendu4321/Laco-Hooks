import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { stateListArray } from './globalState';
import {useStore} from 'laco-react';
// import React,{useState} from 'react';


const useStyles = makeStyles(theme => ({
    Register:{
      backgroundColor: '#fff',
      minHeight: '381px',
      width: '400px',
      margin: '40px auto'
    },
    CardContent:{
        display: 'flex',
        justifyContent : 'center',
        flexDirection : 'column'
    },
    ButtonClass:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        
    },
    button: {
        margin:'10px'
    },
    Header :{
        backgroundColor:'#00FFFF'
    }
  }));


function Register(){
    // const [firstName,setFirstName] = useState("");
    // const [lastName,setLastName] = useState("");
    // const [phoneNum,setPhoneNum] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
    // const [confirmPassword,setConfirmPassword] = useState("");
    // const [city,setCity] = useState("");

    // const router = useRouter();
    const classes = useStyles();

    const state = useStore(stateListArray);


    const doRegister = () => {
        
        if (state.password !== state.confirmPassword){
            alert("Pleaseenter correct Password");
        }
        else{
            alert("Registration successful");
            localStorage.setItem("firstName",state.firstName);
            localStorage.setItem("lastName",state.lastName);
            localStorage.setItem("phoneNum",state.phoneNum);
            localStorage.setItem("email",state.email);
            localStorage.setItem("password",state.password);
            localStorage.setItem("city",state.city);
            Router.push("/Profile")

            
        }

    };
    const doBack =() =>{
        Router.push("/Login");

    };
    

    const setFirstName =(e) =>{
        stateListArray.set(() => ({firstName: e.target.value}))
    };
    const setLastName =(e) =>{
        stateListArray.set(() => ({lastName: e.target.value}))
    };
    const setPhoneNum =(e) =>{
        stateListArray.set(() => ({phoneNum: e.target.value}))
    };
    const setEmail =(e) =>{
        stateListArray.set(() => ({email: e.target.value}))
    };
    const setPassword =(e) =>{
        stateListArray.set(() => ({password: e.target.value}))
    };
    const setCity =(e) =>{
        stateListArray.set(() => ({city: e.target.value}))
    };
    const setConfirmPassword =(e) =>{
        stateListArray.set(() => ({confirmPassword: e.target.value}))
    };

    return(
        <Card className={classes.Register}>
                <CardHeader className={classes.Header} title="Registration Page" titleTypographyProps="Registration Page">

                </CardHeader>

                <CardContent className={classes.CardContent}>
                    <TextField id="firstName" label="First Name" variant="outlined" color="primary" className="userid" style={{padding:9}}
                    onChange={setFirstName}
                    
                    />
                    <TextField id="lastName" label="Last Name" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={setLastName}
                    />
                    <TextField id="phoneNum" label="Phone Number" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={setPhoneNum}
                    />
                    <TextField id="city" label="City" variant="outlined" color="primary" className="city"style={{padding:9}}
                    onChange={setCity}
                    />
                    <TextField id="email_id" label="Email Id" variant="outlined" color="primary" className="userid" style={{padding:9}}
                    onChange={setEmail}
                    />
                    <TextField type="password" id="Password" label="Password" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={setPassword}
                    />
                    <TextField type="password" id="confirmPassword" label="Confirm Password" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={setConfirmPassword}
                    />

                    <div className={classes.ButtonClass}>
                        <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doRegister}>Register</Button>
                        <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doBack}>Back</Button>
                    </div>


                    
                </CardContent>
                
    
            </Card>
    )
}


export default Register;