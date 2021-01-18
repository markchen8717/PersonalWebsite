import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
            contrastText: "#262626"
        },
        secondary: {
            main: "#E4C356",
            contrastText: "#262626"

        },
        common:{
            black:"#262626"
        }

    },
    typography: {
        fontSize: 13,
        htmlFontSize:17,
        fontFamily:[
            "Roboto"
        ].join(","),
    }
});
export default theme;
