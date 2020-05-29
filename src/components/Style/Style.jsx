const styles = {
    card: {
        maxWidth: 200,
        backgroundColor: 'rgba(255, 217, 154, 0.3)',
        marginLeft: '25px',
        marginTop: '25px',
    },
    snippet: {
        maxWidth: 600,
        backgroundColor: 'rgba(222, 222, 222, 0.1)',
        marginLeft: '25px',
        marginTop: '25px',
    },
    media: {
        width: 600,
        paddingTop: '56.25%', // 16:9
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        maxWidth: 345,
    },
    spicy: {
        background: '#076585',  /* fallback for old browsers */
        // background: linear-gradient(to left, #fff, #076585), /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: 'rgb(63, 105, 251)',
        background: 'linear-gradient(200deg, #606c88, #3f4c6b)',
        border: 0,
        // borderRadius: 3,
        color: 'white',
        boxShadow: '1px 1px 5px black',
        height: 30,
        // padding: '0 30px',
        type: 'dark',
        primary: { main: "#e91e63", contrastText: "#fff" },
        secondary: { main: "#03a9f4", contrastText: "#fff" },
    },
    cursive: {
        fontFamily: 'Courgette',
    },
};

export default styles;