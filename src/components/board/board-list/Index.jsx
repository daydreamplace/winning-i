import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Table } from "antd";
import styled from "styled-components";

const Board = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  const onCreate = (e) => {
    navigate("create");
  };

  useEffect(() => {
    axios.get("http://localhost:4000/board").then((res) => {
      setBoardList(res.data);
    });
  }, []);

  return (
    <BoardSpace>
      <h1>BOARD</h1>
      <div className="button">
        <Button type="primary" onClick={onCreate}>
          POST
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={boardList}
        onRow={(row) => {
          return {
            onClick: (e) => {
              navigate(`/board/${row.id}`);
            },
          };
        }}
      />
    </BoardSpace>
  );
};

const columns = [
  {
    title: "No.",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Create",
    dataIndex: "create_at",
    key: "create_at",
  },
];

const BoardSpace = styled.div`
  padding: 20px;

  h1 {
    color: #ff6b72;
    font-weight: 600;
    font-size: 50px;
  }

  .button {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
`;

export default Board;
