import {Col, DatePicker, Form, Input, Row} from "antd";
import React from "react";
import {IFields} from "./Interfaces";

interface IFieldGenerator {
  fieldsList: Array<IFields>
}
export const FieldGenerator = ({fieldsList}: IFieldGenerator) => {
  return(<>
    {fieldsList.map((field) => {
      return (
          <Row gutter={field.rowGutter}>
            <Col span={field.colSpan}>
              <Form.Item
                  wrapperCol={{offset: field.wrapperOffset, span: field.wrapperSpan}}
                  label={field.label}
                  name={field.name}
                  rules={field.rules}
                  hasFeedback={field.hasFeedback}
              >
                {field.type === "input" ?
                    (
                        <Input
                            size={field.size}
                            placeholder={field.placeholder}
                        />
                    ) : field.type === "password" ? (
                            <Input.Password size={field.size}/>
                        ) :
                        (
                            <DatePicker
                                size={field.size}
                                placeholder={field.placeholder}
                                format={field.format}/>
                        )}
              </Form.Item>
            </Col>
          </Row>
      )
    })}
  </>
  )
}