import {IFields} from "../Interfaces";
const cpfRegex = /^\d{3}.?\d{3}.?\d{3}-?\d{2}$/

export const fields: IFields[] = [

  {
    type: "input",
    name: "name",
    label: "Nome completo",
    size: "large",
    placeholder: "Entre com o seu nome completo",
    rowGutter: 0,
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    hasFeedback: false,
    rules: [{required:true,message:"Entre com o seu nome completo!"}]
  },
  {
    type: "input",
    name: "cpf",
    label: "CPF",
    size: "large",
    placeholder: "Entre com o seu CPF",
    rowGutter: 0,
    colSpan: 24,
    wrapperSpan: 0,
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
    label: "",
    size: "large",
    placeholder: "01/01/2023",
    format:"DD/MM/YYYY",
    rowGutter: 0,
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 4,
    hasFeedback: false,
    rules: [{required:true,type:"date",message:"Entre com sua data de nascimento!"}]
  }
]