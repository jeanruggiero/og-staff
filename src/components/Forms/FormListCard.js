import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";

const useStyles = makeStyles({
  card: {

  },
  name: {
    flexGrow: 0,
    fontWeight: 500,
    fontSize: "large"
  },
  date: {
    color: "#AAAAAA"
  }
});

function FormListCard(props) {

  const [redirect, setRedirect] = useState(false);
  const [elevation, setElevation] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);
  const [style, setStyle] = useState({});
  const classes = useStyles();

  const handleMouseOver = () => {
    setStyle({backgroundColor: "#e6ecfa"});
  };

  const handleMouseOut = () => {
    setStyle({});
  };

  const handleClick = (event) => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={"/forms/"+props.uuid} />
  };

  return (
    <Card className={classes.card}
          square
          style={style}
          key={props.uuid}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleClick}

    >
      <CardActionArea>
        <Box px={2} py={1} display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Typography className={classes.name}
                        display="inline"
            >
              {props.FirstNameRepr} {props.LastNameRepr}
            </Typography>
          </Box>

          <Box>
            <Typography className={classes.date}
                        display="inline"
            >
              {props.dateSubmitted}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>

    </Card>
  )
}

export default FormListCard;