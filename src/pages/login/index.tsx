import React from "react";
import {Form, notification} from "antd";
import FormItem from "antd/es/form/FormItem";

export default function Login(){
    function onFinish() {
        notification.open({
            message: "Tudo certo!"
        });
    }
    function onFinishFailed() {
        notification.open({
            message: "Algo deu errado!",
            description: "Preencha os campos corretamente!"
        });
    }

    return(
        <div>
            <Form
                name={"loginForm"}
                layout={"vertical"}
                initialValues={{remember:true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <FormItem
                    label={"Usuário"}
                    name={"username"}
                    rules={[{required:true, type: "email", message: "Entre com um e-mail válido"}]}>
                </FormItem>
            </Form>
        </div>
    )
}