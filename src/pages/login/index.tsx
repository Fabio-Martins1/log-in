import React from "react";

import styles from "./Login.module.css"

import {useNavigate} from "react-router-dom";
import {Button, Form, notification} from "antd";
import {LoginOutlined, UserAddOutlined} from "@ant-design/icons";
import {FieldGenerator} from "../FieldGenerator";
import {fieldsLogin} from "./FieldsLogin";

export const Login = () => {

  const navigate = useNavigate()

  const onFinish = ():void => {
    notification.open({
      message: "Tudo certo!"
    });
    navigate("/")
  }
  const onFinishFailed = ():void => {
    notification.open({
      message: "Algo deu errado!",
      description: "Preencha os campos corretamente!"
    });
  }

  return (
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <Form
              name={"loginForm"}
              layout={"vertical"}
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete={"off"}
          >
            <FieldGenerator fieldsList={fieldsLogin}/>

            <Form.Item wrapperCol={{offset: 2, span: 20}}>
              <Button block size={"large"} type={"primary"} htmlType={"submit"}>Entrar<LoginOutlined/> </Button>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 6, span: 12}}>
              <Button block size={"large"} type={"default"}
                      href={"/createAccount"}>Registre-se <UserAddOutlined/></Button>
            </Form.Item>
          </Form>
        </div>
      </div>
  )
}