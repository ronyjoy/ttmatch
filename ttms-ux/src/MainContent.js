import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

import './css/content.css'


import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function MainContent() {
    const classes = useStyles();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = (item) => {
        console.info('You clicked the Chip.'+item);
    };

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
                        <Chip size="small" avatar={<Avatar>M</Avatar>} label="Serve" onClick={()=>handleClick('P1Serve')} />
                    </div>
                    <div class="player2 col col-6">
                        <Chip size="small" avatar={<Avatar>M</Avatar>} label="Serve" onClick={()=>handleClick('p2Serve')} />
                    </div>
               
                </div>

            </div>


        </div>
    );
}









