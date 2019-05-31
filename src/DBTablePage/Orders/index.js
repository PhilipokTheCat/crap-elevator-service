import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class DBTable extends React.Component {
    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Модель лифта</Table.HeaderCell>
                        <Table.HeaderCell>Клиент</Table.HeaderCell>
                        <Table.HeaderCell>Сотрудник</Table.HeaderCell>
                        <Table.HeaderCell>Тип оплаты</Table.HeaderCell>
                        <Table.HeaderCell>Адрес</Table.HeaderCell>
                        <Table.HeaderCell>Дата начала работ</Table.HeaderCell>
                        <Table.HeaderCell>Стоимость монтажа</Table.HeaderCell>
                        <Table.HeaderCell textAlign="right">
                            <Button primary>Новая запись</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>OTIS Gen2</Table.Cell>
                        <Table.Cell>ОАО "Белагропромбанк"</Table.Cell>
                        <Table.Cell>Лисюнин Сергей Александрович</Table.Cell>
                        <Table.Cell>Безнал</Table.Cell>
                        <Table.Cell>ул. Волковысская 31</Table.Cell>
                        <Table.Cell>23.06.2019</Table.Cell>
                        <Table.Cell>6000 бел.руб</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>OTIS Gen2</Table.Cell>
                        <Table.Cell>ОАО "Белагропромбанк"</Table.Cell>
                        <Table.Cell>Лисюнин Сергей Александрович</Table.Cell>
                        <Table.Cell>Безнал</Table.Cell>
                        <Table.Cell>ул. Волковысская 31</Table.Cell>
                        <Table.Cell>10.01.2020</Table.Cell>
                        <Table.Cell>6000 бел.руб</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>Лифт грузовой 1300 кг</Table.Cell>
                        <Table.Cell>ИП "Добры Молодцы"</Table.Cell>
                        <Table.Cell>Корнеев Денис Викторович</Table.Cell>
                        <Table.Cell>Безнал</Table.Cell>
                        <Table.Cell>ул. Дунина-Марцинкевича 3</Table.Cell>
                        <Table.Cell>19.07.2019</Table.Cell>
                        <Table.Cell>8000 бел.руб</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>Лифт грузовой 1300 кг</Table.Cell>
                        <Table.Cell>ОДО "ЭлемаСтрой"</Table.Cell>
                        <Table.Cell>Корнеев Денис Викторович</Table.Cell>
                        <Table.Cell>Безнал</Table.Cell>
                        <Table.Cell>ул. Притыцкого 31</Table.Cell>
                        <Table.Cell>27.02.2020</Table.Cell>
                        <Table.Cell>8000 бел.руб</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>Лифт пассажирский 500 кг</Table.Cell>
                        <Table.Cell>ГУО "Минский государственный колледж электроники"</Table.Cell>
                        <Table.Cell>Лисюнин Сергей Александрович</Table.Cell>
                        <Table.Cell>Безнал</Table.Cell>
                        <Table.Cell>ул. Казинца 91</Table.Cell>
                        <Table.Cell>02.05.2020</Table.Cell>
                        <Table.Cell>6500 бел.руб</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>5</Table.Cell>
                        <Table.Cell>Лифт пассажирский 500 кг</Table.Cell>
                        <Table.Cell>ГУО "Минский государственный колледж электроники"</Table.Cell>
                        <Table.Cell>Лисюнин Сергей Александрович</Table.Cell>
                        <Table.Cell>Безнал</Table.Cell>
                        <Table.Cell>ул. Казинца 91</Table.Cell>
                        <Table.Cell>04.11.2020</Table.Cell>
                        <Table.Cell>6500 бел.руб</Table.Cell>
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

