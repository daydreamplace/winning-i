import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import Chart from "../components/chart/Chart";
import { BarChartOutlined, UserOutlined } from "@ant-design/icons";
import { BsFileEarmarkPost } from "react-icons/bs";
import styled from "styled-components";

const { Header, Content, Sider } = Layout;

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  function getItem(label, key, icon, link) {
    return {
      key,
      icon,
      label,
      ...(link && {
        onClick: () => {
          navigate(link);
        },
      }),
    };
  }

  const items = [
    getItem("CHART", "1", <BarChartOutlined />, undefined),
    getItem("BOARD", "2", <BsFileEarmarkPost />, "/board"),
    getItem("USER SETTING", "3", <UserOutlined />, "/user"),
  ];

  return (
    <MainPage>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />{" "}
        <Layout className="site-layout">
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </MainPage>
  );
};

const MainPage = styled.div``;

export default Main;
