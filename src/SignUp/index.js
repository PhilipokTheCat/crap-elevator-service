import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';

export default class SignUp extends React.Component {
    render() {
        return (
            <div class="elevator-service_login">
                <h3>Регистрация</h3>
                <Form action="/" method="POST">
                    <Form.Field>
                        <Form.Input type="text" label="Логин" name="login" placeholder="Введите логин"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input type="password" label="Пароль" name="password" placeholder="Введите пароль"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input type="password" label="Повторите пароль" name="password-repeat" placeholder="Введите пароль ещё раз"/>
                    </Form.Field>
                    <Message
                        error
                        header='Ошибка'
                        content='Введен неправильный логин или пароль.'
                    />
                    <div className="elevator-service_bottom-links">
                        <Button primary type="submit">Регистрация</Button>
                        <Link to="/">Назад</Link>
                    </div>
                </Form>  
            </div>
        )
    }
}