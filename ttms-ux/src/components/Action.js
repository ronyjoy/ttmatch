
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import '../css/content.css'


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

export default function Action(props) {
    const classes = useStyles();
    
    function handleChange(event) {
        props.onClick(event,props.fullName);
    }
  

    return (
        <div className={classes.root}>
            <Chip size="small" key={props.fullName} avatar={<Avatar>M</Avatar>} label={props.name} name={props.fullName} onClick={handleChange} />
        </div>
    );
}