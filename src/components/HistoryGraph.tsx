import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./HistoryGraph.scss";
import { DateRange, GraphPoint } from "../utils/interfaces";

interface HistoryGraphProps {
  graphData: GraphPoint[];
  dateRange: DateRange;
  setDateRange: Function;
}

const HistoryGraph = ({ graphData, dateRange, setDateRange }: HistoryGraphProps) => {
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
      <Col span={24}>
        <ResponsiveContainer>
          <AreaChart
            width={600}
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
      </Col>
    </Row>
  );
};

export default HistoryGraph;
