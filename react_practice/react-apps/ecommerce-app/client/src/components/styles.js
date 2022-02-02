import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: "10px"
  },
  media: {
    height: 0,
    paddingTop: '57.25%', // 16:9
    margin: "10px"
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