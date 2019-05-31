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
                        <Table.HeaderCell>Наименование</Table.HeaderCell>
                        <Table.HeaderCell>Описане</Table.HeaderCell>
                        <Table.HeaderCell>Длительность работ</Table.HeaderCell>
                        <Table.HeaderCell>Деталь</Table.HeaderCell>
                        <Table.HeaderCell>Стоимость работ</Table.HeaderCell>
                        <Table.HeaderCell textAlign="right">
                            <Button primary>Новая запись</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>Замена пускателя</Table.Cell>
                        <Table.Cell>Замена пускателя электрической цепи двигателя в распределительном шкафу лифта</Table.Cell>
                        <Table.Cell>2 дня</Table.Cell>
                        <Table.Cell>Пускатель Schneider Electric TeSyS K</Table.Cell>
                        <Table.Cell>300 бел.руб</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>Замена тросса</Table.Cell>
                        <Table.Cell>Замена ведущего тросса лифта с проверкой канатоведущих шкивов двигателя и кабины лифта</Table.Cell>
                        <Table.Cell>5 дней</Table.Cell>
                        <Table.Cell>Тросс стальной 18мм</Table.Cell>
                        <Table.Cell>1000 бел.руб</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>Замена платы УЭЛ</Table.Cell>
                        <Table.Cell>Замена главной платы лифта производства ООО "Могилевлифтмаш" УЭЛ</Table.Cell>
                        <Table.Cell>2 дня</Table.Cell>
                        <Table.Cell>Устройство управления лифтом УЭЛ-3</Table.Cell>
                        <Table.Cell>850 бел.руб</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>Диагностика лифта</Table.Cell>
                        <Table.Cell>Проверка износа тросса/электродвигателя/пускателей/платы/канатоведущих шкивов. Нагрузочное тестирование лифта. Проверка стабильности противовеса</Table.Cell>
                        <Table.Cell>3 дня</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>80 бел.руб</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>Смазка рельсов</Table.Cell>
                        <Table.Cell>Наполнение масляничков кабины лифта для смазывани башмаков и рельсов, обкатка</Table.Cell>
                        <Table.Cell>1 день</Table.Cell>
                        <Table.Cell>Масло смазочное бытовое АМС Медиа "Золушка"</Table.Cell>
                        <Table.Cell>50 бел.руб</Table.Cell>
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

