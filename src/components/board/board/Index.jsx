import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Card, Form, Row, Col, Input, Button, Modal } from "antd";
import Editor from "../editor/Index";
import Viewer from "../viewer/Index";
import styled from "styled-components";

const BoardCreate = () => {
  const { id } = useParams();
  const location = useLocation();
  const [form] = Form.useForm();
  const watchContent = Form.useWatch("content", form);

  const onFinish = (values) => {
    if (id) {
      Modal.success({
        title: "SUCCESS",
        content: "POST EDITED",
      });
      return;
    }
    Modal.success({
      title: "SUCCESS",
      content: "POST CREATED",
    });
  };

  // useEffect(() => {
  //   if (!id) return;
  //   // data fetch
  //   async function fetchAPI() {
  //     const data = await Promise.resolve({
  //       title: "데이터 제목",
  //       user: "Eden",
  //       content: "12312312",
  //     });
  //     form.setFieldValue("title", data.title);
  //     form.setFieldValue("content", data.content);
  //   }
  //   fetchAPI();
  // }, [id]);

  // useEffect(() => {
  //   if (!id) return;
  //   axios.post('http://localhost:4000/board/').then(() => {
  //     user: "Eden";
  //   });
  // }, [id]);

  return (
    <>
      <Card>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={16}>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <Form.Item label="제목" name="title">
                    <Title
                      disabled={id && !location.pathname.includes("update")}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Form.Item label="content" name="content">
                    {id && !location.pathname.includes("update") ? (
                      <Viewer watchContent={watchContent} />
                    ) : (
                      <Editor
                        initialValue={watchContent}
                        onChange={(html) => {
                          form.setFieldValue("content", html);
                        }}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Buttons type="primary" htmlType="submit">
              저장
            </Buttons>
            <Buttons type="default" htmlType="button">
              remove
            </Buttons>
          </div>
        </Form>
      </Card>
    </>
  );
};

const Title = styled(Input)`
  width: 100%;
`;

const Buttons = styled(Button)`
  margin: 0 10px;
`;

export default BoardCreate;
