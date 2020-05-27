import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {API_URL} from "../constants";

const useStyles = makeStyles({
  field: {
    paddingBottom: 15,
    paddingRight: 12
  }
});

const axios = require('axios');

function PasswordChange(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.form.checkValidity()) {

      return
    }

    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return
    }

    axios.post(API_URL + "update_password/", {
      password: password,
      email: email
    }, {
      headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
    })
      .then(response => {
        props.handlePasswordChange();
      });
  };

  return (
    <Box p={3}>
      <Typography gutterBottom variant="h3">Optometric Group</Typography>
      <Typography gutterBottom>To finish creating your account, you must enter your email address and change your password.</Typography>

      <form>
        <Box pt={1}>
          <TextField
            value={email}
            label="Email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event => setEmail(event.target.value)}
            className={classes.field}
            required
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
            required
          />
        </Box>

        <Box pt={1}>
          <TextField
            value={confirmPassword}
            label="Confirm Password"
            type="password"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={event => setConfirmPassword(event.target.value)}
            className={classes.field}
            required
          />
        </Box>

        {passwordMismatch && (
          <Typography color="error">Passwords do not match.</Typography>
        )}

        <Button type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
        >
          Update Password
        </Button>


      </form>
    </Box>
  )
}

export default PasswordChange;