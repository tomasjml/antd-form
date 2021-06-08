import { Table, Card } from 'antd';
import React, { ReactElement } from 'react';

const TableAmortizacion = ({ style = {} }): ReactElement => {
  const data = [
    {
      cuota: '1',
      fecha: '5 de Febrero, 2020',
      capital: 32.15,
      interes: 0.15,
      balance: 5800.0
    },
    {
      cuota: '2',
      fecha: '5 de Diciembre, 2024',
      capital: 42.15,
      interes: 0.18,
      balance: 1358.1
    }
  ];

  const columns = [
    {
      title: 'Cuota',
      dataIndex: 'cuota',
      key: 'cuota'
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha'
    },
    {
      title: 'Capital',
      dataIndex: 'capital',
      key: 'capital'
    },
    {
      title: 'Ínteres',
      dataIndex: 'interes',
      key: 'interes'
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance'
    }
  ];
  return (
    <Card title="Amortización">
      <Table columns={columns} dataSource={data} style={style} />
    </Card>
  );
};

export default TableAmortizacion;
