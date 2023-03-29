// import React from 'react';

// export const App: React.FC = () => (
//   <h1>Hello React</h1>
// );

import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { RecipeReviewCard } from './components/Card/index';
import { TodoListAppBar } from './components/AppBar/index';
import {LeftNavDrawer} from './components/LeftNav/index';
import {
  Card,
  CardHeader,
  Switch,
  Box,
  Container,
  FormGroup,
  FormControlLabel,
  CssBaseline,
  ThemeOptions,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light: ThemeOptions = {
  palette: {
    mode: "light",
  },
};

const dark: ThemeOptions = {
  palette: {
    mode: "dark",
  },
};

export function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container>
        <div className="App">
          <TodoListAppBar />
          <LeftNavDrawer />
          <Box component="div" p={5}></Box>
          <Card>
            <CardHeader
              action={
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={isDarkTheme} onChange={changeTheme} />
                    }
                    label="Dark Theme"
                  />
                </FormGroup>
              }
            />
    <div>
      <RecipeReviewCard />
    </div>
    </Card>
        </div>
      </Container>
    </ThemeProvider>
  );
}