import {IFields} from "../Interfaces";
import {UserOutlined, LockOutlined} from "@ant-design/icons";

export const fieldsLogin: IFields[] = [
  {
    type: "input",
    name: "username",
    label: "Usuário",
    size: "large",
    placeholder: "Entre com o seu usuário",
    rowGutter: 0,
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    hasFeedback: true,
    prefix: <><UserOutlined/></>,
    rules: [{required: true, type: "email", message: "Entre com o seu usuário!"}]
  },
  {
    type: "password",
    name: "password",
    label: "Senha",
    size: "large",
    placeholder: "Entre com a sua senha",
    rowGutter: 0,
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    prefix: <><LockOutlined/></>,
    rules: [{required: true, message: "Entre com a sua senha!", min: 8}]
  }, {
    type: "checkbox",
    name: "remember",
    valuePropName: "checked",
    label: "",
    size: "large",
    placeholder: "Lembrar senha",
    rowGutter: 0,
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
  },
]