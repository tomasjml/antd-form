import { Table, Card } from 'antd';
import React, { ReactElement } from 'react';

const TableCargos = ({ style = {} }): ReactElement => {
  const data = [
    {
      id: '1',
      descripcion: 'Compra de Artículo',
      monto: 32.15,
      porciento: 0.15,
      desdeCuota: '5 de Enero, 2020',
      hastaCuota: '5 de Enero, 2024',
      cobrarSaldo: 5800.0
    },
    {
      id: '2',
      descripcion: 'Compra de Artículo',
      monto: 42.15,
      porciento: 0.18,
      desdeCuota: '5 de Febrero, 2020',
      hastaCuota: '5 de Diciembre, 2024',
      cobrarSaldo: 1358.1
    }
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion'
    },
    {
      title: 'Monto',
      dataIndex: 'monto',
      key: 'monto'
    },
    {
      title: '%?',
      dataIndex: 'porciento',
      key: 'porciento'
    },
    {
      title: 'Desde Cuota',
      dataIndex: 'desdeCuota',
      key: 'desdeCuota'
    },
    {
      title: 'Hasta Cuota',
      dataIndex: 'hastaCuota',
      key: 'hastaCuota'
    },
    {
      title: 'Cobrar Saldo',
      dataIndex: 'cobrarSaldo',
      key: 'cobrarSaldo'
    },
    {
      title: 'Acciones',
      dataIndex: 'acciones',
      key: 'acciones'
    }
  ];
  return (
    <Card title="Cargos">
      <Table columns={columns} dataSource={data} style={style} />
    </Card>
  );
};

export default TableCargos;
