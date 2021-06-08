import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '@redux/actions';
import { GITHUB_LINK } from '@constants/general';
import LogoIcon from '@icons/LogoIcon';

// Components
// import ListItem from '@components/data_entry/ListItem';
import Header from '@layout/header';
import { Card, DatePicker, Steps } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Form, Input, Select, Button, Space, InputNumber } from 'antd';
import { EyeOutlined, CalculatorOutlined } from '@ant-design/icons';
import TableCargos from '../../components/table-cargos/TableCargos';
import TableAmortizacion from '../../components/table-amortizacion/TableAmortizacion';

import './Home.less';

type Props = {};

const Home: React.FC<Props> = () => {
  const { t } = useTranslation('homeScreen');
  const [fetching, setFetching] = useState(true);
  const list = useSelector((state: IReducerStates) => state.list);
  const dispatch = useDispatch();
  const { Step } = Steps;
  const style = { padding: '4px', margin: '4px' };
  const { Option } = Select;

  useEffect(() => {
    (async () => {
      await setFetching(true);

      try {
        await dispatch(fetchList());
      } catch (error) {
        // console.log(error)
      }

      setFetching(false);
    })();
  }, [dispatch]);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <div className="home">
        <Card
          className="home__card"
          title={<Header />}
          extra={
            <a className="home__link" href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
              <LogoIcon fill="#3f51b5" /> {t('githubLink')}
            </a>
          }
        >
          <Row justify="space-around" style={style}>
            <Col flex="auto">
              <Steps size="default" current={0}>
                <Step title="Datos Solicitante" />
                <Step title="Representante Legales" />
                <Step title="Datos Prestámos" />
                <Step title="Codeudores y Garantías" />
                <Step title="Documentos" />
              </Steps>
            </Col>
          </Row>
          <br />
          <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{ span: 32 }}
            // wrapperCol={{ span: 16 }}
          >
            <Row justify="space-around" gutter={24} style={style}>
              <Space align="center">
                <Col>
                  <Form.Item label="ID Solicitud">
                    <Form.Item
                      name="solicitud-id"
                      noStyle
                      rules={[{ required: true, message: 'ID es requerido' }]}
                    >
                      <Input style={{ width: 320 }} placeholder="ID de la Solicitud" />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="Estado Solicitud">
                    <Form.Item
                      name="solicitud-estado"
                      noStyle
                      rules={[{ required: true, message: 'ID es requerido' }]}
                    >
                      <Input style={{ width: 320 }} placeholder="ID de la Solicitud" />
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col>
                  <Button type="primary" shape="round" icon={<EyeOutlined />}>
                    Observaciones
                  </Button>
                </Col>
              </Space>
            </Row>
            <Row justify="space-around" gutter={24} style={style}>
              <Divider>Generales de Crédito</Divider>
            </Row>
            <Row justify="space-around" gutter={24} style={style}>
              <Col>
                <Form.Item name="oferta" label="Oferta" rules={[{ required: true }]}>
                  <Select
                    placeholder="Oferta de Financiamiento"
                    style={{ width: 480 }}
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="male">Préstamo</Option>
                    <Option value="female">Póliza de Crédito</Option>
                    <Option value="other">Microcrédito</Option>
                    <Option value="other">Crédito Comercial</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-around" gutter={24} style={style}>
              <Col>
                <Form.Item name="fecha" label="Fecha">
                  <DatePicker placeholder="Fecha de Solicitud" style={{ width: 240 }} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name="monto" label="Monto">
                  <InputNumber placeholder="$0.00" />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-around" gutter={24} style={style}>
              <Col>
                <Form.Item name="taza" label="Taza">
                  <InputNumber placeholder="00%" />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Plazo">
                  <Input.Group compact>
                    <Form.Item
                      name={['plazo', 'Seleccione']}
                      noStyle
                      rules={[{ required: true, message: 'Province is required' }]}
                    >
                      <Select placeholder="Seleccione" style={{ width: 180 }}>
                        <Option value="Zhejiang">1 año</Option>
                        <Option value="Jiangsu">2 años</Option>
                        <Option value="Jiangsu">4 años</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={['address', 'street']}
                      noStyle
                      rules={[{ required: true, message: 'Street is required' }]}
                    >
                      <Input style={{ width: '35%' }} />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-around" gutter={24} style={style}>
              <Col>
                <Form.Item label="F. Pago">
                  <Select placeholder="Seleccione una Frecuencia" style={{ width: 320 }}>
                    <Select.Option value="1">Quincenal</Select.Option>
                    <Select.Option value="2">Mensual</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col>
                <Button type="primary" shape="round" icon={<CalculatorOutlined />}>
                  Calcular Cuota
                </Button>
              </Col>
            </Row>
            <Row justify="space-around" gutter={24} style={style}>
              <Col>
                <Form.Item name="tipo-cuenta" label="Tipo de Cuenta" rules={[{ required: true }]}>
                  <Select
                    placeholder="Seleccione el Tipo de cuenta"
                    style={{ width: 320 }}
                    // onChange={onGenderChange}
                    allowClear
                  >
                    <Option value="male">Ahorro</Option>
                    <Option value="female">Crédito</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-around" gutter={24} style={style}>
              <Col>
                <Form.Item name="primer-pago" label="Primer Pago">
                  <DatePicker placeholder="Seleccione la Fecha" style={{ width: 320 }} />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-around" gutter={24} style={style}>
              <Col>
                <Form.Item name="cuota" label="Cuota">
                  <InputNumber placeholder="$0.00" />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Proveedor">
                  <Select placeholder="Seleccione un Proveedor" style={{ width: 320 }}>
                    <Select.Option value="1">Artist Supply. Inc</Select.Option>
                    <Select.Option value="2">HP.COM</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Row justify="space-around" gutter={24} style={style}>
            <Col>
              <Divider>Tablas</Divider>
            </Col>
          </Row>
          <Row justify="space-around" gutter={24} style={style}>
            <Col>
              <TableCargos style={{ width: 1024 }} />
            </Col>
          </Row>
          <Row justify="space-around" gutter={24} style={style}>
            <Col>
              <TableAmortizacion style={{ width: 1024 }} />
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default Home;
