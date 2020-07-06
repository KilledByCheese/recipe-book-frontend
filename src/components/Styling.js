import { makeStyles } from '@material-ui/core/styles';

const useStyling = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
      flexGrow : 1,
      background : "linear-gradient(to bottom right, #262626, #333333)",
      color : "#00a3cc",
      textAlign : "center",
    },
    typography : {
    },
    title: {
    },
    headerbox: {
      flexGrow : 1,
      display : "flex",
      alignItems: "center",
      justifyContent:"center",
      magin:"auto",
    },
    footer:{
      flexGrow : 1,
      background : "linear-gradient(to bottom right, #333333, #262626)",
      color : "#00a3cc",
      display : "flex",
      alignItems: "center",
      justifyContent:"center",
      magin:"auto",
      textAlign : "center",
    },
    content:{
      display : "flex",
      flexGrow : 1,
    },

  }));


  export default useStyling;