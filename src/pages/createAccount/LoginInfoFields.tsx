import {IFields} from "../Interfaces";
const rulesConfirmPassword = [
  {
    required: true,
    message: "Entre com uma senha válida",
    min: 8
  },
  ({getFieldValue}:any) => ({
    validator(_:any, value:any) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("As duas senhas não coincidem!"));
    }
  })
]

export const loginInfoFields: IFields[] = [
  {
    type: "password",
    name: "password",
    label: "Senha",
    size: "large",
    placeholder: "Entre com a sua senha",
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required: true, message: "Entre com a sua senha!", min: 8}]
  },
  {
    type: "password",
    name: "confirmPassword",
    label: "Confirme sua senha",
    size: "large",
    placeholder: "Digite a sua senha novamente",
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: rulesConfirmPassword
  },


]