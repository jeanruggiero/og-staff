import React, {useState} from "react";
import {Box} from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  field: {
    paddingBottom: 15,
    paddingRight: 12
  }
});

function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.form.checkValidity()) {
      return;
    }

    props.handleLogin({
      username: username,
      password: password
    });
  };

  return (
    <Box p={3}>
      <Typography gutterBottom variant="h5">Staff Login</Typography>

      <form>
        <Box pt={1}>
          <TextField
            value={username}
            label="Username"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event => setUsername(event.target.value)}
            className={classes.field}
          />
        </Box>

        <Box pt={1}>
          <TextField
            value={password}
            label="Password"
            type="password"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event => setPassword(event.target.value)}
            className={classes.field}
          />
        </Box>

        <Button type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
        >
          Login
        </Button>


      </form>
    </Box>
  )
}

export default Login;