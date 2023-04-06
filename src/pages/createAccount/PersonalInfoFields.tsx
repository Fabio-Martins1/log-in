import {IFields} from "../Interfaces";

const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/

export const personalInfoFields: IFields[] = [

  {
    type: "input",
    name: "name",
    label: "Nome completo",
    size: "large",
    placeholder: "Entre com o seu nome completo",
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required: true, message: "Entre com o seu nome completo!"}]
  },
  {
    type: "input",
    name: "cpf",
    label: "CPF",
    size: "large",
    placeholder: "Entre com o seu CPF",
    colSpan: 24,
    wrapperSpan: 24,
    wrapperOffset: 0,
    hasFeedback: true,
    rules: [{
      required: true,
      type: "string",
      pattern: cpfRegex,
      transform(value) {
        return value.replace(/[.-]/g, "")
      },
      message: "Entre com um CPF válido!"
    }]
  },
  {
    type: "date",
    name: "birthDate",
    label: "Data de nascimento",
    size: "large",
    placeholder: "",
    format: "DD/MM/YYYY",
    colSpan: 24,
    wrapperSpan: 12,
    wrapperOffset: 0,
    rules: [{required: true, type: "date", message: "Entre com sua data de nascimento!"}]
  },
  {
    type: "input",
    name: "email",
    label: "E-mail",
    size: "large",
    placeholder: "Entre com o seu e-mail",
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    hasFeedback: true,
    rules: [{required: true, type: "email", message: "Entre com um e-mail válido!"}]
  },
  {
    type: "input",
    name: "reserveEmail",
    label: "E-mail reserva",
    size: "large",
    placeholder: "Entre com o seu e-mail reserva",
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    hasFeedback: true,
    rules: [{required: true, type: "email", message: "Entre com um e-mail válido!"}]
  }
]