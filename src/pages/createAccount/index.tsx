import React, {useState} from "react"

import styles from "./CreateAccount.module.css"

import {Button, Col, Form, notification, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {personalInfoFields} from "./PersonalInfoFields";
import {FieldGenerator} from "../FieldGenerator";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import {adressInfoFields} from "./AdressInfoFields";
import {loginInfoFields} from "./LoginInfoFields";

export const CreateAccount = () => {
  const [page, setPage] = useState<number>(0)
  const navigate = useNavigate()

  const onFinish = (): void => {
    if (page === 0) {
      setPage(1);
    }
    if (page === 1) {
      setPage(2);
    }
    if (page === 2) {
      notification.success({
        message: "Tudo certo!"
      });
      navigate("/login");
    }
  };
  const onFinishFailed = (): void => {
    notification.error({
      message: "Preencha os campos corretamente"
    });
  };
  const prev = (): void => {
    if (page === 0) {
      navigate("/login");
    }
    if (page === 1) {
      setPage(0);
    }
    if (page === 2) {
      setPage(1);
    }
  };
  return (
      <div className={styles.create_account_container}>
        <div className={styles.create_account_form_container}>
          <Form
              name={"loginForm"}
              layout={"vertical"}
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete={"off"}
          >
            {page === 0 ? (<FieldGenerator fieldsList={personalInfoFields}/>) : page === 1 ? (
                <FieldGenerator fieldsList={adressInfoFields}/>) : (
                <FieldGenerator fieldsList={loginInfoFields}></FieldGenerator>)}
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item wrapperCol={{offset: 0, span: 15}}>
                  <Button block
                          size={"large"}
                          type={"default"}
                          onClick={() => prev()}
                          icon={<ArrowLeftOutlined/>}
                          shape={"circle"}
                          id={"submitButton"}
                  />
                </Form.Item>
              </Col>
              <Col offset={10} span={1}>
                <Form.Item>
                  <Button block
                          shape={"circle"}
                          size={"large"}
                          type={"primary"}
                          htmlType={"submit"}
                          id={"backButton"}
                          icon={<ArrowRightOutlined/>}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
  )
}