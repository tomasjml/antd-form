import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Steps } from 'antd';
import { fetchList } from '@redux/actions';
import { GITHUB_LINK } from '@constants/general';
import LogoIcon from '@icons/LogoIcon';
import ListItem from '@components/data_entry/ListItem';
import Header from '@layout/header';
import { Row, Col, Divider } from 'antd';
import { Form, Input, Select, Tooltip, Button, Space, Typography, InputNumber } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

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
      <Header />
      <div className="home">
        <Card
          className="home__card"
          title={t('title')}
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
              <Col>
                <Form.Item name="price" label="Price">
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Home;
