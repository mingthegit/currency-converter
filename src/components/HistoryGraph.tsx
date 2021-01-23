import React from "react";
import { Row, Col, Typography, Button, Space, Spin } from "antd";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { DateRange, GraphPoint } from "utils/interfaces";
import "./HistoryGraph.scss";

interface HistoryGraphProps {
  graphData: GraphPoint[];
  dateRange: DateRange;
  setDateRange: Function;
  fetchingData: boolean;
}

const HistoryGraph = ({
  graphData,
  dateRange,
  setDateRange,
  fetchingData,
}: HistoryGraphProps) => {
  const handleRangeSelect = (range: string) => {
    setDateRange(range);
  };

  return (
    <Row justify="center" className="HistoryGraph">
      <Col span={24}>
        <Typography.Paragraph className="Title">Exchange History</Typography.Paragraph>
      </Col>
      <Col span={24} className="RangeSelector">
        <Space>
          {Object.values(DateRange).map((range) => (
            <Button
              key={range}
              type={range === dateRange ? "primary" : "default"}
              onClick={() => handleRangeSelect(range)}
            >
              {range}
            </Button>
          ))}
        </Space>
      </Col>
      <Col span={24} className="ResponsiveContainer">
        <ResponsiveContainer>
          <AreaChart
            height={300}
            data={graphData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis padding={{ top: 64 }} />
            <Tooltip />
            <Area type="monotone" dataKey="rate" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
        {fetchingData && (
          <div className="LoadingPane">
            <Spin />
          </div>
        )}
      </Col>
    </Row>
  );
};

export default HistoryGraph;
