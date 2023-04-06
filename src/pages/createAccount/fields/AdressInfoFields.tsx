import {IFields} from "../../Interfaces";

const cepRegex = /^(\d{5})(\d{3})$/

export const adressInfoFields: IFields[] = [
  {
    type: "input",
    name: "zipCode",
    label: "CEP",
    size: "large",
    placeholder: "Entre com o seu CEP",
    rowGutter: 0,
    colSpan: 24,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{
      required: true,
      pattern: cepRegex,
      transform(value) {
        return value.replace(/[.-]/g, "")
      },
      message: "Entre com um CEP válido"
    }]
  },
  {
    type: "input",
    name: "state",
    label: "Estado",
    size: "large",
    placeholder: "Entre com o seu Estado",
    rowGutter: 10,
    colSpan: 12,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required:true,message: "Entre com um Estado válido"
    }]
  },
  {
    type: "input",
    name: "city",
    label: "Cidade",
    size: "large",
    placeholder: "Entre com a sua cidade",
    rowGutter: 0,
    colSpan: 12,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required:true,message: "Entre com um Estado válido"
    }]
  }
]