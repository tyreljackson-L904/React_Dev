import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  container: {
    marginTop: "10%",
    marginBottom: "10%",
    width: "50%"
  },
  media: {
    height: "150px",
    width: " 200px",
    objectFit: "contain",
    justifyContent: "center",
    paddingTop: "5px",
    paddingBottom: "5px"
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
  remove: {
    marginRight: "10px"
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
