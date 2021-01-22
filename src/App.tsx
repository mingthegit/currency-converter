import React, { useEffect, useState } from "react";
import { Layout, Typography, Row, Col, Space } from "antd";

import CurrencyForm from "./components/CurrencyForm";
import HistoryGraph from "./components/HistoryGraph";
import { Currency, FormSchema, NullableNumber, DateRange, GraphPoint } from "./utils/interfaces";
import API from "./utils/api";
import "./App.scss";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const App = () => {
  const [formValues, setFormValues] = useState<FormSchema>({
    base: Currency.GBP,
    target: Currency.EUR,
    amount: undefined,
  });
  const [exchangeRate, setExchangeRate] = useState<NullableNumber>();
  const [dateRange, setDateRange] = useState<DateRange>(DateRange.OneMonth);
  const [graphData, setGraphData] = useState<GraphPoint[]>([]);

  useEffect(() => {
    async function fetchExchangeRate(formValues: FormSchema) {
      try {
        const rate = await API.fetchExchangeRate(formValues);
        setExchangeRate(rate);
      } catch (err) {
        console.error(err);
      }
    }

    fetchExchangeRate(formValues);
  }, [formValues.base, formValues.target]);

  useEffect(() => {
    async function fetchHistoryData(formValues: FormSchema, dateRange: DateRange) {
      try {
        setGraphData(await API.fetchHistoryData(formValues, dateRange));
      } catch (err) {
        console.error(err);
      }
    }

    fetchHistoryData(formValues, dateRange);
  }, [formValues.base, formValues.target, dateRange]);

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
            <HistoryGraph graphData={graphData} dateRange={dateRange} setDateRange={setDateRange} />
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
