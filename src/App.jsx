import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Index";
import Chart from "./components/chart/Chart";
import Board from "./components/board/BoardList";
import BoardCreate from "./components/board/BoardCreate";
import Login from "./pages/login/Index";
import { ThemeProvider } from "styled-components";
import * as Theme from "./Theme";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route end index element={<Chart />} />
            </Route>
            <Route path="/board" element={<Main />}>
              <Route end index element={<Board />} />
              <Route path="create" element={<BoardCreate />} />
              <Route path=":id" element={<BoardCreate />} />
              <Route path=":id/update" element={<BoardCreate />} />
            </Route>
            <Route path="/user" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
