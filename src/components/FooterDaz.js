import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import horse from './horse.png'
 
/** Styles for a responsive footer */
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  }
});
 
function Footer(props) {
  const { classes } = props;
 
  return (
    /**Component return information about developers*/
    <footer className={classes.footer}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          <a target="_blank" href="https://www.holbertonschool.com/"><Avatar alt="Remy Sharp" src={horse} />Holberton School</a>
        </Typography>
        <Typography>
          By:<a target="_blank" href="https://github.com/JulianDavidG07"> Julian David - </a>
             <a target="_blank" href="https://github.com/deibyocampo">Deiby Ocampo</a>
        </Typography>
        <Typography component="p">
          @2020 All right reserved
        </Typography>
      </Paper>
    </footer>
  );
}

export default withStyles(styles)(Footer);
