import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  loading: {
    marginTop: "7%",
    fontSize: "30px"
  },
  main: {
    display: "flex",
    marginTop: "15%",
    maxHeight: "60vh",
    width: "80%",
    justifyContent: "space-between",
    padding: "20px",
    border: "solid"
  },
  imagesHorizontalContainer: {
    display: "flex",
    flexDirection: "column",
  },
  productImage: {
    objectFit: "contain",
    // border: "solid",
    margin: "10%",
    background: "#F5F5F5"
  },
  colors: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px"
  },
  colorOptions: {
    display: "flex",
    height: "100px",
    width: "100px",
    objectFit: "contain",
    border: "solid"
  },
});
