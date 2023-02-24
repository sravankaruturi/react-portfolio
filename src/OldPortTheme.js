import { createTheme } from "@mui/material/styles";

const OldPortTheme = createTheme({
        
        palette:{

            primary: {
                main: '#2c3e50',
            },

            secondary:{
                main: '#18bc9c'
            },

        },


        components: {
            MuiButton: {
                styleOverrides:{
                    root: {
                    
                    }
                }
            },

            MuiAppBar: {
                styleOverrides:{
                    root:{
                        
                    }
                }
            }

            
        }

    });

export default OldPortTheme;