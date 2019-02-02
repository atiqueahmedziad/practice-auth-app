import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiInput: {
            underline: {
                '&:after': {
                    borderBottom: '2px solid #f50057',
                },
            },
        },
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: '#f50057'
                },
            }
        }
    },
});

export default theme;
