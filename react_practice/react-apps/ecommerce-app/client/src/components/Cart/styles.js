import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  container: {
    marginTop: "10%"
  },
  media: {
    height: "150px",
    width: " 200px",
    objectFit: "contain",
    justifyContent: "center"
  },
  content: {
    display: "flex",
    justifyContent: "end",
  },
  cardDetails: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    alignItems: "center",
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
  },
  contentBox: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  emptyButton: {
    display: "flex",
    justifyContent: "space-between",
  },
  checkoutButton: {
    display: "flex",
  },
});
