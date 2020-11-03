import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

import './css/content.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
}




export default function MainContent() {
    const classes = useStyles();
    return (
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
                <div class="col col-3">
                <FormControlLabel control={<Switch />} label="UnderSpin" />
                </div>
                <div class="col col-3">
                    
                </div>
                <div class="col col-3">
                <FormControlLabel control={<Switch />} label="UnderSpin" />
                </div>
                <div class="col col-3">.
                </div>
            </div>
    
        </div>
    )


}
