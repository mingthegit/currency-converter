import React from "react";
import { Row, Col, Form, InputNumber, Select } from "antd";

import {
  Currency,
  CurrencyOptions,
  FormSchema,
  CurrencySource,
  NullableNumber,
} from "../utils/interfaces";
import "./CurrencyForm.scss";

interface CurrencyFormProps {
  formValues: Partial<FormSchema>;
  setFormValues: Function;
  exchangeRate: NullableNumber;
}

const selectProps = {
  className: "CurrencySelector",
  showSearch: true,
  options: CurrencyOptions,
  placeholder: "Select...",
  filterOption: (input: string, option: any): boolean => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  },
};

const CurrencyForm = ({
  formValues,
  setFormValues,
  exchangeRate,
}: CurrencyFormProps) => {
  const handleCurrencySelect = (field: CurrencySource, value: Currency) => {
    const { base: prevBase, target: prevTarget } = formValues;
    let nextBase, nextTarget;
    // @BONUS: if same currencies are selected, swap them
    if (field === CurrencySource.Base) {
      nextBase = value;
      nextTarget = value === prevTarget ? prevBase : prevTarget;
    } else {
      nextTarget = value;
      nextBase = value === prevBase ? prevTarget : prevBase;
    }

    setFormValues({ ...formValues, base: nextBase, target: nextTarget });
  };

  const handleAmountChange = (value: any) => {
    if (value) {
      setFormValues({ ...formValues, amount: value});
    }
  };

  const { base, target, amount } = formValues;
  const amountFallback = amount || 1;
  const amountConverted = exchangeRate ? (amountFallback* exchangeRate).toFixed(2) : '';

  return (
    <Form size="large" layout="vertical" className="CurrencyForm">
      <Row gutter={24}>
        <Col xs={24}>
          <Form.Item label="From">
            <Select
              {...selectProps}
              value={formValues.base}
              onSelect={(value) => {
                handleCurrencySelect(CurrencySource.Base, value);
              }}
            />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item label="To">
            <Select
              {...selectProps}
              value={formValues.target}
              onSelect={(value) => {
                handleCurrencySelect(CurrencySource.Target, value);
              }}
            />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item label="Amount">
          <InputNumber
            className="AmountInput"
            placeholder="In Base Currency"
            min={0}
            value={amount}
            onChange={handleAmountChange}
          />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {exchangeRate && (
            <div className="ResultBox">
              {`${amountFallback} ${base} equals `}
              <strong>{`${amountConverted} ${target}`}</strong>
            </div>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default CurrencyForm;
