import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "antd";
import styled from "styled-components";

const Board = () => {
  const navigate = useNavigate();

  const onCreate = (e) => {
    navigate("create");
  };

  useEffect(() => {}, []);

  return (
    <BoardSpace>
      <div className="button">
        <Button type="primary" onClick={onCreate}>
          POST
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
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

const data = [
  {
    id: "1",
    user: "Eden",
    title: "How to use GitHub",
    create_at: "2022.10.18",
  },
  {
    id: "2",
    user: "Brie",
    title: "How to use apexcharts in react",
    create_at: "2022.10.18",
  },
  {
    id: "3",
    user: "Eden",
    title: "How to use toast ui in react",
    create_at: "2022.10.30",
  },
  {
    id: "4",
    user: "Eden",
    title: "How to use Antd in react",
    create_at: "2022.10.17",
  },
  {
    id: "5",
    user: "Eden",
    title: "How to use Axios in react",
    create_at: "2022.10.15",
  },
  {
    id: "6",
    user: "Eden",
    title: "What is json-server?",
    create_at: "2022.10.10",
  },
];

const BoardSpace = styled.div`
  .button {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
`;

export default Board;
