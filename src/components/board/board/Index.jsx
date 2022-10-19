import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { apiClient } from "../../../api/client";
import { Card, Form, Row, Col, Input, Button, Modal } from "antd";
import Editor from "../editor/Index";
import { Viewer } from "@toast-ui/react-editor";
import styled from "styled-components";

const BoardCreate = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const watchContent = Form.useWatch("content", form);

  const onFinish = async (values) => {
    if (id) {
      await apiClient.put("/board/" + id, {
        ...values,
        user: "Eden",
        create_at: "2022.10.10",
      });
      Modal.success({
        title: "SUCCESS",
        content: "POST EDITED",
        onOk: () => {
          navigate("/board");
        },
      });
      return;
    }
    await apiClient.post("/board/", {
      ...values,
      user: "Eden",
      create_at: "2022.10.10",
    });
    Modal.success({
      title: "SUCCESS",
      content: "POST CREATED",
      onOk: () => {
        navigate("/board");
      },
    });
  };

  const onClick = async () => {
    await apiClient.delete("/board/" + id);
    navigate("/board", { replace: true });
  };

  useEffect(() => {
    if (!id) return;
    async function fetchAPI() {
      const data = await apiClient.get("/board/" + id).then((res) => res.data);
      form.setFieldValue("title", data.title);
      form.setFieldValue("content", data.content);
    }
    fetchAPI();
  }, [id]);

  const isDetailPage = id && !location.pathname.includes("update");

  return (
    <BoardPage>
      <h1>BOARD</h1>
      <Card>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={16}>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <Form.Item label="Title" name="title">
                    <Title
                      disabled={id && !location.pathname.includes("update")}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Form.Item label="Content" name="content">
                    {id && !location.pathname.includes("update") ? (
                      <>
                        {watchContent ? (
                          <Viewer initialValue={watchContent} />
                        ) : null}
                      </>
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
            <Buttons
              type="primary"
              htmlType={isDetailPage ? "button" : "submit"}
              onClick={
                isDetailPage
                  ? (e) => {
                      e.preventDefault();
                      navigate("/board/" + id + "/update", { replace: true });
                    }
                  : undefined
              }
            >
              {isDetailPage ? "update" : "save"}
            </Buttons>
            <Buttons type="default" htmlType="button" onClick={onClick}>
              remove
            </Buttons>
          </div>
        </Form>
      </Card>
    </BoardPage>
  );
};

const BoardPage = styled.div`
  padding: 20px;

  h1 {
    margin-bottom: 10px;
    color: #3e82f7;
    font-weight: 600;
    font-size: 50px;
  }
`;

const Title = styled(Input)`
  width: 100%;
`;

const Buttons = styled(Button)`
  margin: 0 10px;
`;

export default BoardCreate;
