import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Elevators extends React.Component {
    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Модель</Table.HeaderCell>
                        <Table.HeaderCell>Тип лифта</Table.HeaderCell>
                        <Table.HeaderCell>Описание</Table.HeaderCell>
                        <Table.HeaderCell>Производитель</Table.HeaderCell>
                        <Table.HeaderCell>Поставщик</Table.HeaderCell>
                        <Table.HeaderCell>Стоимость</Table.HeaderCell>
                        <Table.HeaderCell textAlign="right">
                            <Button primary>Новая запись</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>OTIS Gen2</Table.Cell>
                        <Table.Cell>Пассажирский</Table.Cell>
                        <Table.Cell>Универсальные, динамичные и эффективные лифты Gen2 Flex решат задачу интенсивного пассажиропотока в вашем здании. Лифты разработаны на основе нашей последней интеллектуальной модульной платформы и способны обеспечить плавность езды в любых условиях. </Table.Cell>
                        <Table.Cell>© Otis Elevator Company</Table.Cell>
                        <Table.Cell>ООО "ЛогистикСимпл"</Table.Cell>
                        <Table.Cell>230000 бел. руб.</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>Лифт пассажирский 500 кг</Table.Cell>
                        <Table.Cell>Пассажирский</Table.Cell>
                        <Table.Cell>Пассажирские лифты выпускаются грузоподъемностью 225, 300, 320, 400, 500, 630, 1000 и 1275 кг со скоростью движения до 2 м/с включительно. Они предназначены для установки в жилых домах, общественных и административных зданиях, гостиницах, банках и офисах. Изготавливаются с верхним и нижним расположением машинного помещения, а также отдельные модели не имеющие машинного помещения.</Table.Cell>
                        <Table.Cell>ОАО “Могилевлифтмаш”</Table.Cell>
                        <Table.Cell>ООО "ЛогистикСимпл"</Table.Cell>
                        <Table.Cell>90000 бел. руб.</Table.Cell>
                        <Table.Cell textAlign="right">
                            <Button>Ред.</Button>
                            <Button>X</Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>Лифт грузовой 1300 кг</Table.Cell>
                        <Table.Cell>Грузовой</Table.Cell>
                        <Table.Cell>Грузовые лифты выпускаются грузоподъемностью 100, 250, 500, 1000, 2000, 3200, 5000 и 6300 кг со скоростью движения 0,22; 0,25; 0,4 и 0,5 м/с. Предназначены для перевозки грузов с проводником и без него. Устанавливаются в общественных зданиях и на промышленных предприятиях (складах, магазинах, ресторанах и пр.).</Table.Cell>
                        <Table.Cell>ОАО “Могилевлифтмаш”</Table.Cell>
                        <Table.Cell>ООО "ЛогистикСимпл"</Table.Cell>
                        <Table.Cell>126000 бел. руб.</Table.Cell>
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

