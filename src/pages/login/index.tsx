import React from "react";

import styles from "./Login.module.css"
import {useNavigate} from "react-router-dom";
import {Button, Checkbox, Form, Input, notification} from "antd";
import {UserOutlined} from "@ant-design/icons";

export const Login = () => {

  const navigate = useNavigate()

  const onFinish = () =>{
    notification.open({
      message: "Tudo certo!"
    });
    navigate("/")
  }
  const onFinishFailed = () =>{
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
            <Form.Item
                label={"Usuário"}
                name={"username"}
                rules={[{required: true, type: "email", message: "Entre com um e-mail válido!"}]}
                hasFeedback
            >
              <Input
                  size={"large"}
                  placeholder={"Entre com o usuário!"}
                  prefix={<UserOutlined/>}/>
            </Form.Item>
            <Form.Item
                label={"Senha"}
                name={"password"}
                rules={[{required: true, message: "Entre com uma senha válida!"}]}
                hasFeedback
            >
              <Input.Password
                  size={"large"}
              />
            </Form.Item>
            <Form.Item name={"remember"} valuePropName={"checked"}>
              <Checkbox>Lembrar senha</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 4, span: 16}}>
              <Button block size={"large"} type={"primary"} htmlType={"submit"}>Entrar</Button>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 7}}>
              <Button type={"ghost"} href={"/createAccount"}>Registre-se</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
  )
}