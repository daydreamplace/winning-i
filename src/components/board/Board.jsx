import React, { useState } from "react";
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

const Board = () => {
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, sorter) => {
    setSortedInfo(sorter);
  };

  const onClear = () => {
    setSortedInfo({});
  };

  const setNumSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "id",
    });
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

  return (
    <>
      <BoardSpace
        style={{
          marginBottom: 16,
        }}
      >
        <div className="buttons">
          <Button onClick={setNumSort}>Sort No.</Button>
          <Button onClick={onClear}>Clear Sort</Button>
          <Button type="primary">POST</Button>
        </div>
      </BoardSpace>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </>
  );
};

const BoardSpace = styled(Space)``;

export default Board;
