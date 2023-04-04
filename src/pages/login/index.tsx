import React from "react";
import {Button, Checkbox, Form, Input, notification} from "antd";
import FormItem from "antd/es/form/FormItem";

import {UserOutlined} from "@ant-design/icons";

import styles from "./Login.module.css"
import {useNavigate} from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate()
  function onFinish() {
    notification.open({
      message: "Tudo certo!"
    });
    navigate("/")
  }

  function onFinishFailed() {
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
            <FormItem
                label={"Usuário"}
                name={"username"}
                rules={[{required: true, type: "email", message: "Entre com um e-mail válido"}]}>
              <Input
                  size={"large"}
                  placeholder={"Entre com o usuário"}
                  prefix={<UserOutlined/>}/>
            </FormItem>
            <FormItem
                label={"Senha"}
                name={"password"}
                rules={[{required: true, message: "Entre com uma senha válida"}]}>
              <Input.Password
                  size={"large"}
              />
            </FormItem>
            <FormItem name={"remember"} valuePropName={"checked"}>
              <Checkbox>Lembrar senha</Checkbox>
            </FormItem>
            <FormItem wrapperCol={{offset: 4, span: 16}}>
              <Button block size={"large"} type={"primary"} htmlType={"submit"}>Entrar</Button>
            </FormItem>
            <FormItem wrapperCol={{offset: 7}}>
              <Button type={"ghost"} href={"/createAccount"}>Registre-se</Button>
            </FormItem>
          </Form>
        </div>
      </div>
  )
}