import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Login extends React.Component {
    render() {
        return (
            <div class="elevator-service_login">
                <h3>Авторизация</h3>
                <Form action="/table">
                    <Form.Field>
                        <Form.Input id="login" type="text" label="Логин" placeholder="Введите логин"/>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input id="password" type="password" label="Пароль" placeholder="Введите пароль"/>
                    </Form.Field>
                    
                    <div className="elevator-service_bottom-links">
                        <Button primary>Войти</Button>
                        <Link to="/signup">Регистрация</Link>
                    </div>
                </Form>  
                
            </div>
        )
    }
}