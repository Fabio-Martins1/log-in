import React from "react"
import {Button, Col, Form, notification, Row} from "antd";

import styles from "./CreateAccount.module.css"
import {useNavigate} from "react-router-dom";
import {fields} from "./Fields";
import {FieldGenerator} from "../FieldGenerator";

export const CreateAccount = () => {
  const navigate = useNavigate()


  const onFinish = (values: any): void => {
    notification.open({
      message: "Tudo certo!"
    });
    navigate("/")
  };
  const onFinishFailed = (values: any): void => {

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
            <FieldGenerator fieldsList={fields} />
            <Row gutter={24}>
              <Col span={10}>
                <Form.Item>
                  <Button block size={"large"} type={"primary"} htmlType={"submit"}>Avançar</Button>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item wrapperCol={{offset: 24}}>
                  <Button block size={"large"} type={"default"} onClick={() => prev()}>Voltar</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
  )
}