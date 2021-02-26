import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: "12px",
      margin: "0 10px",
    },
    items: {
      backgroundColor: "#fff",
      padding: "15px",
      border: "1px solid #e2e8ea",
    },
    imgBox: {
      display: "flex",
      justifyContent: "center",
      height: "130px",
      padding: "10px",
    },
    info: {
      padding: "10px",
    },
    cartProduct: {
      border: "1px solid #ecf0f1",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
      marginTop: "15px",
    },
    name: { fontSize: "18px", marginTop: "10px" },
    price: { fontSize: "20px", marginTop: "10px" },
    qtyBtn: {
      minWidth: "5px",
      padding: "5px 10px",
    },
    qty: {
      display: "flex",
      alignItems: "center",
      "& p": {
        marginRight: "10px",
      },
    },
    prdQty: {
      display: "inline",
      width: "30px",
      textAlign: "center",
    },
    cartOptn: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
    },
    priceDtl: {
      margin: "15px 0",
    },
    priceItems: {
      display: "flex",
      justifyContent: "center",
    },
    orderBtn: {
      marginTop: "15px",
    },
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "100vh",
      "& h6": {
        marginBottom: "15px",
      },
    },
    emptyCart: {
      display: "flex",
      width: "300px",
      height: "200px",
      border: "1px solid #ecf0f1",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }),
  { index: 1 }
);

export default useStyles;
