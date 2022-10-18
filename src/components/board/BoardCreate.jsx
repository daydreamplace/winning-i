import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Card, Form, Row, Col, Input, Button, Modal } from "antd";
import Editor from "./components/Editor";
import Viewer from "./components/Viewer";
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

  useEffect(() => {
    if (!id) return;
    // data fetch
    async function fetchAPI() {
      const data = await Promise.resolve({
        title: "데이터 제목",
        content: "12312312",
      });
      form.setFieldValue("title", data.title);
      form.setFieldValue("content", data.content);
    }
    fetchAPI();
  }, [id]);

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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="primary" htmlType="submit">
              저장
            </Button>
            <Button type="default" htmlType="button">
              remove
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
};

const Title = styled(Input)`
  width: 100%;
`;

export default BoardCreate;
