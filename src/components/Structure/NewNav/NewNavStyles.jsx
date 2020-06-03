const styles = {
    spicy: {
        fontFamily: 'Courgette',
        background: '#076585',  /* fallback for old browsers */
        // background: linear-gradient(to left, #fff, #076585), /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: 'rgb(63, 105, 251)',
        background: 'linear-gradient(200deg, #3a1212, #3a1212)',
        // border: 0,
        // borderRadius: 3,
        color: 'white',
        textShadow: '2px 2px 2px #000',
        // boxShadow: '2px 2px 8px black',
        // height: 30,
        padding: '0 10px',
        marginLeft: '5px',
        type: 'dark',
        primary: { main: "#e91e63", contrastText: "#fff" },
        secondary: { main: "#03a9f4", contrastText: "#fff" },
        transition: 'all 0.5s',
        '&:hover': {
            // boxShadow: '2px 2px 18px black',
            color: 'black',
            // textShadow: '2px 2px 2px #000',
            fontSize: '30',
        }
    },
    spicy_button: {
        // fontFamily: 'Roboto',
        // background: '#076585',  /* fallback for old browsers */
        // background: linear-gradient(to left, #fff, #076585), /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: 'rgb(63, 105, 251)',
        background: 'linear-gradient(200deg, #3a1212, #3a1212)',
        // border: 0,
        // borderRadius: 3,
        color: 'white',
        // boxShadow: '2px 2px 8px black',
        // height: 30,
        padding: '15px',
        // marginLeft: '5px',
        type: 'dark',
        primary: { main: "#e91e63", contrastText: "#fff" },
        secondary: { main: "#03a9f4", contrastText: "#fff" },
        transition: 'all 0.5s',
        '&:hover': {
            backgroundColor: 'linear-gradient(200deg, #8a2b2b, #3a1212)',
            boxShadow: '2px 2px 18px black',
        }
    },
};

export default styles;