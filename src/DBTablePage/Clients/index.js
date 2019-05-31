import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Clients extends React.Component {
    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Наименование</Table.HeaderCell>
                        <Table.HeaderCell>Юр. адрес</Table.HeaderCell>
                        <Table.HeaderCell>Телефон</Table.HeaderCell>
                        <Table.HeaderCell>Р. счет</Table.HeaderCell>
                        <Table.HeaderCell textAlign="right">
                            <Button primary>Новая запись</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>ОАО "Белагропромбанк"</Table.Cell>
                        <Table.Cell>ул. Волковысская 31</Table.Cell>
                        <Table.Cell>+375 17 2057766</Table.Cell>
                        <Table.Cell>3000155514915</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>ОДО "ЭлемаСтрой"</Table.Cell>
                        <Table.Cell>ул. Всерусская 54</Table.Cell>
                        <Table.Cell>+375 17 2667425</Table.Cell>
                        <Table.Cell>3997023155471</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>ИП "Добры Молодцы"</Table.Cell>
                        <Table.Cell>ул. Берута 101</Table.Cell>
                        <Table.Cell>+375 29 6982539</Table.Cell>
                        <Table.Cell>3110994495182</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>ГУО "Минский государственный колледж электроники"</Table.Cell>
                        <Table.Cell>ул. Казинца 91</Table.Cell>
                        <Table.Cell>+375 17 2057766</Table.Cell>
                        <Table.Cell>3789441248901</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}

