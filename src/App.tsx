import React, { useEffect, useState } from "react";
import { Layout, Typography, Row, Col, Space } from "antd";

import CurrencyForm from "components/CurrencyForm";
import HistoryGraph from "components/HistoryGraph";
import { Currency, FormSchema, NullableNumber, DateRange, GraphPoint } from "utils/interfaces";
import API from "utils/api";
import "./App.scss";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const App = () => {
  const [formValues, setFormValues] = useState<FormSchema>({
    base: Currency.GBP,
    target: Currency.EUR,
  });
  const [exchangeRate, setExchangeRate] = useState<NullableNumber>();
  const [dateRange, setDateRange] = useState(DateRange.OneMonth);
  const [graphData, setGraphData] = useState<GraphPoint[]>([]);
  const [fetchingRate, setFetchingRate] = useState(false);
  const [fetchingGraph, setFetchingGraph] = useState(false);

  useEffect(() => {
    async function fetchExchangeRate(formValues: FormSchema) {
      try {
        setFetchingRate(true);
        const rate = await API.fetchExchangeRate(formValues);
        setExchangeRate(rate);
      } catch (err) {
        console.error(err);
      } finally {
        setFetchingRate(false);
      }
    }

    fetchExchangeRate(formValues);
  }, [formValues.base, formValues.target]);

  useEffect(() => {
    async function fetchHistoryData(formValues: FormSchema, dateRange: DateRange) {
      try {
        setFetchingGraph(true);
        setGraphData(await API.fetchHistoryData(formValues, dateRange));
      } catch (err) {
        console.error(err);
      } finally {
        setFetchingGraph(false);
      }
    }

    fetchHistoryData(formValues, dateRange);
  }, [formValues.base, formValues.target, dateRange]);

  return (
    <Layout className="AppLayout">
      <Header className="Header">
        <Title>Currency Converter</Title>
      </Header>
      <Content className="Content">
        <Row justify="center" gutter={32}>
          <Col xs={22} sm={16} md={8} xl={5} className="Column">
            <CurrencyForm
              formValues={formValues}
              setFormValues={setFormValues}
              exchangeRate={exchangeRate}
              fetchingData={fetchingRate}
            />
          </Col>
          <Col xs={22} sm={16} md={10} xl={8} className="Column">
            <HistoryGraph
              graphData={graphData}
              dateRange={dateRange}
              setDateRange={setDateRange}
              fetchingData={fetchingGraph}
            />
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
