
import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import './css/content.css'
import Action from './components/Action'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

function handleChange(event,name) {
    console.info('You clicked the Chip.'+name);
}

const actions=['Serve','Back','Top','Dead','Side(L)','Side(R)','Push','Block','Loop','Flick'];
let player1ActionList=[];
let player2ActionList=[];
actions.forEach((action)=>{
    player1ActionList.push( <Action name = {action} fullName={"player1" +action} onClick={handleChange}/>)
})
actions.forEach((action)=>{
    player2ActionList.push( <Action name = {action} fullName={"player2" +action} onClick={handleChange}/>)
})




export default function Match() {
    const classes = useStyles();

   
    return (
        <div className={classes.root}>
            <div>
                <div class="container">
                    <div class="col col-6">
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Player 1 Name" />
                        </form>
                    </div>
                    <div class="col col-6">
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Player 2 Name" />
                        </form>
                    </div>

                </div>
                <div class="container">
                    <div class="player1 col col-6">
                        {player1ActionList}
                    </div>
                    <div class="player2 col col-6">
                       {player2ActionList}
                    </div>
               
                </div>

            </div>


        </div>
    );
}









