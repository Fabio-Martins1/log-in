import React from "react"

import styles from "./CreateAccount.module.css"

import {Button, Col, Form, Input, notification, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {fieldsCreateAccount} from "./FieldsCreateAccount";
import {FieldGenerator} from "../FieldGenerator";
import {ArrowLeftOutlined} from "@ant-design/icons";

export const CreateAccount = () => {
  const navigate = useNavigate()

  const onFinish = (): void => {
    notification.open({
      message: "Tudo certo!"
    });
    navigate("/")
  };
  const onFinishFailed = (): void => {

  };
  const prev = (): void => {
    navigate("/login")
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
            <FieldGenerator fieldsList={fieldsCreateAccount}/>
            <Form.Item label={"teste"} labelCol={{offset: 20, span: 20}}>
              <Input/>
            </Form.Item>
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item wrapperCol={{offset: 0, span: 30}}>
                  <Button block size={"large"} type={"default"} onClick={() => prev()}><ArrowLeftOutlined/> </Button>
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item>
                  <Button block size={"large"} type={"primary"} htmlType={"submit"}>Avançar</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
  )
}