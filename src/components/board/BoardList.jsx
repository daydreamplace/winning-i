import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table } from "antd";
import styled from "styled-components";

const data = [
  {
    id: "1",
    user: "John Brown",
    title: "New York No. 1 Lake Park",
    create_at: "2022.10.18",
  },
  {
    id: "2",
    user: "Jim Green",
    title: "London No. 1 Lake Park",
    create_at: "2022.10.18",
  },
  {
    id: "3",
    user: "Joe Black",
    title: "Sidney No. 1 Lake Park",
    create_at: "2022.10.18",
  },
  {
    id: "4",
    user: "Joe Black",
    title: "Sidney No. 1 Lake Park",
    create_at: "2022.10.18",
  },
  {
    id: "5",
    user: "Joe Black",
    title: "Sidney No. 1 Lake Park",
    create_at: "2022.10.15",
  },
  {
    id: "6",
    user: "Joe Black",
    title: "Sidney No. 1 Lake Park",
    create_at: "2022.10.10",
  },
];

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

const Board = () => {
  const navigate = useNavigate();

  const onCreate = (e) => {
    navigate("create");
  };

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
        onRow={(row, index) => {
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

const BoardSpace = styled.div`
  .button {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
`;

export default Board;
