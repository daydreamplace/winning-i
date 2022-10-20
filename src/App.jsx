import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Index";
import Chart from "./pages/chart/Index";
import Board from "./pages/board/Index";
import BoardCreate from "./components/board/board-create/Index";
import Login from "./pages/login/Index";
import User from "./pages/user/Index";
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
            <Route path="/" element={<Login />} />
            <Route path="/chart" element={<Main />}>
              <Route end index element={<Chart />} />
            </Route>
            <Route path="/board" element={<Main />}>
              <Route end index element={<Board />} />
              <Route path="create" element={<BoardCreate />} />
              <Route path=":id" element={<BoardCreate />} />
              <Route path=":id/update" element={<BoardCreate />} />
            </Route>
            <Route path="/user" element={<Main />}>
              <Route end index element={<User />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
