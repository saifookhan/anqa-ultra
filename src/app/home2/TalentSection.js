import React from "react";
import { Row, Col } from "antd";

import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { StarOutlined } from "@ant-design/icons";

const talents = [
  { title: "Consultants" },
  { title: "Interim Executives" },
  { title: "Industry Experts" },
];

const TalentSection = () => {
  return (
    <div style={{ background: "#071923", padding: "60px 20px", color: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title level={2} style={{ color: "#fff" }}>
          Our talents
        </Title>
        <Paragraph style={{ color: "#ccc", maxWidth: 700 }}>
          People from Ultra accumulate seasoned experience in top tier
          consulting and C-level track record across key industries
        </Paragraph>

        <Row gutter={[32, 32]} style={{ marginTop: 40 }}>
          {talents.map((talent, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={8}
              style={{ textAlign: "center" }}
            >
              <StarOutlined
                style={{ fontSize: 24, color: "#fff", marginBottom: 16 }}
              />
              <Title level={4} style={{ color: "#fff" }}>
                {talent.title}
              </Title>
              <div
                style={{
                  height: 1,
                  background: "#ccc",
                  margin: "20px auto",
                  width: "80%",
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TalentSection;
