import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Index";
import Chart from "./components/chart/chart/Index";
import BoardList from "./components/board/board-list/Index";
import Board from "./components/board/board/Index";
import Login from "./pages/login/Index";
import User from "./components/user/Index";
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
              <Route end index element={<BoardList />} />
              <Route path="create" element={<Board />} />
              <Route path=":id" element={<Board />} />
              <Route path=":id/update" element={<Board />} />
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
