import Link from 'next/link';
import { useState } from 'react';
import { Container, Row, Col, Tab, Tabs, Figure, Stack, Pagination } from 'react-bootstrap';
import styles from '../styles/utils.module.css';

export default function Slides() {
  const [key, setKey] = useState("motivations");

  return (
    <Tabs
      id="slides"
      activeKey={key}
      onSelect={(k) => setKey(k)}>
      <Tab eventKey="motivations" title="Motivations">
        <Slide id="motivations" setKey={setKey} />
      </Tab>
      <Tab eventKey="characteristics" title="Characteristic variables">

      </Tab>
    </Tabs >
  );
}

export function Slide({ id, setKey }) {
  if (id == "motivations") {
    return (
      <Container className={styles.slide}>
        <Row>
          <Col>
            <Stack gap={5}>
              <ul className={styles.list_triangle}>
                <li>Lepton colliders are Higgs factories</li>
                <li>Used to the precise determination of Higgs properties</li>
                <ul className={styles.list_bar}>
                  <li>Yukawa couplings</li>
                  <li>Self couplings</li>
                  <li>Unknown decay modes etc.</li>
                </ul>
                <li className={styles.emph}>
                  First of all, we have to distinguish Higgs signal events from a huge amount of background events.
                  The so-called "Higgs Preselection" procedure
                </li>
              </ul>
              <ul className={styles.list_triangle}>
                <li>Various existing/promising approaches</li>
                <ul className={styles.list_bar}>
                  <li>
                    <Stack direction="horizontal" gap={3}>
                      Cut and Count
                      <Link href="https://link.springer.com/article/10.1140/epjc/s10052-013-2343-8">
                        <a>Ono, et al. '12</a>
                      </Link>
                    </Stack>
                  </li>
                  <li>
                    <Stack direction="horizontal" gap={3}>
                      BDT
                      <Link href="http://indico.ihep.ac.cn/event/6495/session/1/contribution/6/material/slides/0.pdf">
                        <a>talk slide by Bai '16</a>
                      </Link>
                    </Stack>
                  </li>
                  <li className={styles.emph}>
                    Deep Learning
                  </li>
                </ul>
              </ul>
            </Stack>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                width={544}
                height={363}
                alt="e+ e- > z h"
                src="/images/ee2zh2vvbb_annotation.png" />
              <Figure.Caption>
                The dominant Higgs production process \(e^+ e^- \to Z h\) <br />
                associated with \(Z \to \nu \bar\nu\) and \(h \to b \bar b\)
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Pagination className="justify-content-md-center">
            <Stack direction="horizontal" gap={3}>
              <Pagination.Prev disabled="true" />
              <Pagination.Next onClick={() => setKey("characteristics")} />
            </Stack>
          </Pagination>
        </Row>
      </Container>
    );
  }
}