import React, { useEffect, useState } from "react";
import { Layout, Typography, Row, Col, Space } from "antd";

import CurrencyForm from "./components/CurrencyForm";
import API from "./utils/api";
import {
  Currency,
  FormSchema,
  NullableNumber,
} from "./utils/interfaces";
import "./App.scss";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const App = () => {
  const [formValues, setFormValues] = useState<Partial<FormSchema>>({
    base: Currency.GBP,
    target: Currency.EUR,
  });
  const [exchangeRate, setExchangeRate] = useState<NullableNumber>();

  useEffect(() => {
    async function fetchExchangeRate(formValues: Partial<FormSchema>) {
      try {
        const rate = await API.fetchExchangeRate(formValues);
        setExchangeRate(rate);
      } catch (err) {
        console.error(err);
      }
    }

    fetchExchangeRate(formValues);
  }, [formValues.base, formValues.target]);

  return (
    <Layout className="AppLayout">
      <Header className="AppLayoutHeader">
        <Title>Currency Converter</Title>
      </Header>
      <Content className="AppLayoutContent">
        <Space size="large" />
        <Row justify="center" gutter={24}>
          <Col xs={22} sm={16} md={8} xl={5}>
            <CurrencyForm
              formValues={formValues}
              setFormValues={setFormValues}
              exchangeRate={exchangeRate}
            />
          </Col>
          <Col xs={22} sm={16} md={10} xl={8}>
            <h2>Historical Data</h2>
          </Col>
        </Row>
      </Content>
      <Footer>
        <Text>Data provided by https://exchangeratesapi.io</Text>
      </Footer>
    </Layout>
  );
};

export default App;
