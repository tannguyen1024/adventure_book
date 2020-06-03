const styles = {
    card: {
        maxWidth: 200,
        backgroundColor: 'rgba(222, 222, 222, 0.1)',
        marginLeft: '25px',
        marginTop: '25px',
    },
    snippet: {
        maxWidth: 600,
        backgroundColor: 'rgba(222, 222, 222, 0.1)',
        marginLeft: '25px',
        marginTop: '25px',
        position: 'relative',
    },
    media: {
        width: 600,
        paddingTop: '56.25%', // 16:9
        boxShadow: '3px 3px 15px black',
        transition: 'all 1s',
        '&:hover': {
            paddingTop: '65%',
            boxShadow: '3px 3px 50px black',
        }
    },
    media_comment: {
        width: 600,
        paddingTop: '20%', // 16:9
        boxShadow: '3px 3px 15px black',
        transition: 'all 1s',
        '&:hover': {
            paddingTop: '25%',
            boxShadow: '3px 3px 50px black',
        }
    },
    media_create: {
        width: 600,
        paddingTop: '30%', // 16:9
        boxShadow: '3px 3px 15px black',
        transition: 'all 0.5s',
        '&:hover': {
            paddingTop: '35%',
            boxShadow: '3px 3px 50px black',
        }
    },
    title: {
        fontSize: 14,
    },
    pos: {
        fontSize: 14,
        fontFamily: 'Courgette',
        textAlign: 'right',
    },
    pos2: {
        fontSize: 20,
        fontFamily: 'Courgette',
        position: 'absolute',
        textAlign: 'text-top',
    },
    root: {
        maxWidth: 345,
    },
    spicy: {
        fontFamily: 'Permanent Marker',
        background: '#076585',  /* fallback for old browsers */
        // background: linear-gradient(to left, #fff, #076585), /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: 'rgb(63, 105, 251)',
        background: 'linear-gradient(200deg, #657394, #3f4c6b)',
        border: 0,
        // borderRadius: 3,
        color: 'white',
        boxShadow: '2px 2px 8px black',
        // height: 30,
        // padding: '0 30px',
        type: 'dark',
        primary: { main: "#e91e63", contrastText: "#fff" },
        secondary: { main: "#03a9f4", contrastText: "#fff" },
        transition: 'all 0.5s',
        '&:hover': {
            backgroundColor: 'linear-gradient(200deg, #6b7896, #4c5b7d)',
            boxShadow: '2px 2px 18px black',
        }
    },
    spicy_middle: {
        fontFamily: 'Permanent Marker',
        background: '#8a2b2b',  /* fallback for old browsers */
        // background: linear-gradient(to left, #fff, #076585), /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: 'rgb(63, 105, 251)',
        background: 'linear-gradient(200deg, #8a2b2b, #3a1212)',
        border: 0,
        // borderRadius: 3,
        color: 'white',
        boxShadow: '2px 2px 8px black',
        // height: 30,
        // padding: '0 30px',
        type: 'dark',
        primary: { main: "#e91e63", contrastText: "#fff" },
        secondary: { main: "#03a9f4", contrastText: "#fff" },
        transition: 'all 0.5s',
        display: 'inline-block', //Typically a button wouldn't need its own line        
        margin: '0 auto',
        width: '200px', //or whatever
        '&:hover': {
            backgroundColor: 'linear-gradient(200deg, #6b7896, #4c5b7d)',
            boxShadow: '2px 2px 18px black',
        }
    },
    spicy_edit: {
        fontFamily: 'Permanent Marker',
        // background: '#076585',  /* fallback for old browsers */
        // background: 'linear-gradient(200deg, #8a2b2b, #3a1212)',
        border: 0,
        color: '#8a2b2b',
        // boxShadow: '2px 2px 8px black',
        // height: 30,
        type: 'light',
        margin: '0 auto',
        // primary: { main: "#e91e63", contrastText: "#fff" },
        // secondary: { main: "#03a9f4", contrastText: "#fff" },
        transition: 'all 0.5s',
        '&:hover': {
            backgroundColor: 'linear-gradient(200deg, #6b7896, #4c5b7d)',
            boxShadow: '2px 2px 18px black',
        }
    },
    spicy_connection: {
        fontFamily: 'Permanent Marker',
        background: '#076585',  /* fallback for old browsers */
        background: 'linear-gradient(200deg, #8a2b2b, #3a1212)',
        border: 0,
        color: 'white',
        boxShadow: '2px 2px 8px black',
        // height: 30,
        type: 'light',
        // margin: '0 auto',
        marginTop: '15px',
        primary: { main: "#e91e63", contrastText: "#fff" },
        secondary: { main: "#03a9f4", contrastText: "#fff" },
        transition: 'all 0.5s',
        '&:hover': {
            backgroundColor: 'linear-gradient(200deg, #6b7896, #4c5b7d)',
            boxShadow: '2px 2px 18px black',
        }
    },
    spicy_submit: {
        fontFamily: 'Permanent Marker',
        background: '#076585',  /* fallback for old browsers */
        background: 'linear-gradient(200deg, #8a2b2b, #3a1212)',
        border: 0,
        color: 'white',
        boxShadow: '2px 2px 8px black',
        // height: 30,
        type: 'light',
        // margin: '0 auto',
        // marginTop: '15px',
        primary: { main: "#e91e63", contrastText: "#fff" },
        secondary: { main: "#03a9f4", contrastText: "#fff" },
        transition: 'all 0.5s',
        '&:hover': {
            backgroundColor: 'linear-gradient(200deg, #6b7896, #4c5b7d)',
            boxShadow: '2px 2px 18px black',
        }
    },
    cursive: {
        fontFamily: 'Courgette', 
        // fontSize: 17,
    },
    cursive_middle: {
        textAlign: 'center',
        // display: 'inline-block', //Typically a button wouldn't need its own line        
        margin: '0 auto',
        width: '200px', //or whatever
        fontFamily: 'Courgette',
    },
    ending: {
        fontFamily: 'Courgette',
        fontSize: 14,
        marginTop: 15,
        marginRight: 15,
        float: 'right'
    },
    paper: {
        maxWidth: 600,
        backgroundColor: 'rgba(222, 222, 222, 0.1)',
        margin: 25,
        padding: 10,
    },
    shadow: {
        boxShadow: '2px 2px 7px black',
    },
    chip: {
        boxShadow: '2px 2px 7px black',
    },
    root2: {
        flexGrow: 1,
    },
};

export default styles;