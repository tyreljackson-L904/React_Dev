import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: '70%',
  },
  media: {
    height: "150px",
    width: " 200px",
    objectFit: "contain",
    justifyContent: "space-around"
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

