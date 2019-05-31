import React from 'react';
import Clients from './Clients/index';
import Elevators from './Elevators/index';
import Orders from './Orders/index';
import Services from './Services/index';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './style.css';

export default class DBTable extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (
            <Router>
                <div class="elevator-service_table-wrapper">
                    <Menu className="elevator-service_menu">
                        <Menu.Item href="/table/clients" name='clients' active={activeItem === 'clients'} onClick={this.handleItemClick}>
                            Клиенты
                        </Menu.Item>

                        <Menu.Item href="/table/elevators" name='elevators' active={activeItem === 'elevators'} onClick={this.handleItemClick}>
                            Лифты
                        </Menu.Item>

                        <Menu.Item href="/table/orders" name='orders' active={activeItem === 'orders'} onClick={this.handleItemClick}>
                            Заказы
                        </Menu.Item>

                        <Menu.Item href="/table/services" name='services' active={activeItem === 'services'} onClick={this.handleItemClick}>
                            Сервис
                        </Menu.Item>

                        <Menu.Item name='elevatorTypes' active={activeItem === 'elevatorTypes'} onClick={this.handleItemClick}>
                            Типы лифтов
                        </Menu.Item>

                        <Menu.Item name='sex' active={activeItem === 'sex'} onClick={this.handleItemClick}>
                            Пол
                        </Menu.Item>

                        <Menu.Item name='suppliers' active={activeItem === 'suppliers'} onClick={this.handleItemClick}>
                            Поставщики
                        </Menu.Item>

                        <Menu.Item name='paymentTypes' active={activeItem === 'paymentTypes'} onClick={this.handleItemClick}>
                            Способы оплаты
                        </Menu.Item>

                        <Menu.Item name='manufacturers' active={activeItem === 'manufacturers'} onClick={this.handleItemClick}>
                            Производители
                        </Menu.Item>

                        <Menu.Item name='professions' active={activeItem === 'professions'} onClick={this.handleItemClick}>
                            Специализации
                        </Menu.Item>

                        <Menu.Item name='employees' active={activeItem === 'employees'} onClick={this.handleItemClick}>
                            Сотрудники
                        </Menu.Item>

                        <Menu.Item name='spareparts' active={activeItem === 'spareparts'} onClick={this.handleItemClick}>
                            Детали
                        </Menu.Item>

                        <Menu.Item name='contracts' active={activeItem === 'contracts'} onClick={this.handleItemClick}>
                            Контракты
                        </Menu.Item>

                        <Menu.Item name='invoices' active={activeItem === 'invoices'} onClick={this.handleItemClick}>
                            Счета
                        </Menu.Item>
                    </Menu>

                    <Route path={`/table/clients`} exact={true} render={props => (
                        <Clients />
                    )} />
                    <Route path={`/table/elevators`} exact={true} render={props => (
                        <Elevators />
                    )} />
                    <Route path={`/table/orders`} exact={true} render={props => (
                        <Orders />
                    )} />
                    <Route path={`/table/services`} exact={true} render={props => (
                        <Services />
                    )} />
                </div>
            </Router>
        )
    }
}