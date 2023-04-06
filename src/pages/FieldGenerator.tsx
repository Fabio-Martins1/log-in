import {Checkbox, Col, DatePicker, Form, Input, Row} from "antd";
import React from "react";
import {IFields} from "./Interfaces";

interface IFieldGenerator {
  fieldsList: Array<IFields>
}

export const FieldGenerator = ({fieldsList}: IFieldGenerator) => {
  return (<>
        {fieldsList.map((field) => {
          return (
              <Row gutter={field.rowGutter}>
                <Col span={field.colSpan}>
                  <Form.Item
                      wrapperCol={{offset: field.wrapperOffset, span: field.wrapperSpan}}
                      label={field.label}
                      name={field.name}
                      valuePropName={field.valuePropName}
                      rules={field.rules}
                      hasFeedback={field.hasFeedback}
                  >
                    {field.type === "input" ?
                        (
                            <Input
                                size={field.size}
                                placeholder={field.placeholder}
                                prefix={field.prefix}
                            />
                        ) : field.type === "password" ? (
                            <Input.Password
                                size={field.size}
                                placeholder={field.placeholder}
                                prefix={field.prefix}
                            />
                        ) : field.type === "date" ?
                            (
                                <DatePicker
                                    size={field.size}
                                    placeholder={field.placeholder}
                                    format={field.format}/>
                            ) : (
                                <Checkbox>{field.placeholder}</Checkbox>
                            )}
                  </Form.Item>
                </Col>
              </Row>
          )
        })}
      </>
  )
}