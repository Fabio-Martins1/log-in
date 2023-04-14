import {IFields} from "../Interfaces";

const cepRegex = /^(\d{5})(\d{3})$/

export const adressInfoFields: IFields[] = [
  {
    type: "input",
    name: "zipCode",
    label: "CEP",
    size: "large",
    placeholder: "Digite o seu CEP",
    colSpan: 12,
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
    placeholder: "Digite o seu estado",
    colSpan: 12,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required:true,message: "Entre com um estado válido"
    }]
  },
  {
    type: "input",
    name: "city",
    label: "Cidade",
    size: "large",
    placeholder: "Digite a sua cidade",
    colSpan: 12,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required:true,message: "Entre com uma cidade válida"
    }]
  },
  {
    type: "input",
    name: "district",
    label: "Bairro",
    size: "large",
    placeholder: "Digite o seu bairro ",
    colSpan: 12,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required:true,message: "Entre com um bairro válido"
    }]
  },
  {
    type: "input",
    name: "street",
    label: "Rua",
    size: "large",
    placeholder: "",
    colSpan: 13,
    wrapperSpan: 24,
    wrapperOffset: 0,
    rules: [{required:true,message: "Entre com uma rua válida"
    }]
  },
  {
    type: "input",
    name: "numberHouse",
    label: "Nº",
    size: "large",
    placeholder: "",
    colSpan: 6,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required:true,message: "Entre com um número válido"
    }]
  },
  {
    type: "input",
    name: "complement",
    label: "Compl",
    size: "large",
    placeholder: "",
    colSpan: 5,
    wrapperSpan: 0,
    wrapperOffset: 0,
    rules: [{required:true,message: "Entre com um complemento válida"
    }]
  }
]