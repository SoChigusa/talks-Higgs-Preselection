import { MathJax } from 'better-react-mathjax';
import { useState } from 'react';
import { Container, Row, Col, Tab, Tabs, Figure, Stack, Pagination, Carousel } from 'react-bootstrap';
import styles from '../styles/utils.module.css';

let pages = [
  { id: "motivations", title: "Motivations" },
  { id: "characteristics", title: "Characteristic variables" },
  { id: "approaches", title: "Approaches" }
];

export default function Slides() {
  const [key, setKey] = useState("characteristics");

  return (
    <Tabs
      id="slides"
      activeKey={key}
      onSelect={(k) => setKey(k)}>
      {pages.map((page) => (
        <Tab eventKey={page.id} title={page.title}>
          <Slide id={page.id} setKey={setKey} />
        </Tab>
      ))}
    </Tabs >
  );
}

export function SlideTemplate({ children, pageNumber }) {
  var next = pages[pageNumber + 1].id;
  return (
    <Container className={styles.slide}>
      {children}
      <Row>
        <Pagination className="justify-content-md-center">
          <Stack direction="horizontal" gap={3}>
            <Pagination.Prev disabled="true" />
            <Pagination.Next onClick={() => setKey({ next })} />
          </Stack>
        </Pagination>
      </Row>
    </Container>
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
                      <a href="https://link.springer.com/article/10.1140/epjc/s10052-013-2343-8" target="_blank">
                        Ono, et al. '12
                      </a>
                    </Stack>
                  </li>
                  <li>
                    <Stack direction="horizontal" gap={3}>
                      BDT
                      <a href="http://indico.ihep.ac.cn/event/6495/session/1/contribution/6/material/slides/0.pdf" target="_blank">
                        talk slide by Bai '16
                      </a>
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
                <MathJax>
                  The dominant Higgs production process \(e^+ e^- \to Z h\) <br />
                  associated with \(Z \to \nu \bar\nu\) and \(h \to b \bar b\)
                </MathJax>
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
  } else if (id == "characteristics") {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Container className={styles.slide}>
        <Stack gap={3}>
          <Row>
            <ul className={styles.list_triangle}>
              <li>
                <MathJax>Consider the di-jet decay {"\\(h \\to jj\\)"} with {"\\(\\mathrm{Br}\\simeq 70\\%\\)"}</MathJax>
              </li>
              <li>
                <MathJax>Consider {"\\(Z \\to \\nu\\bar{\\nu}\\)"}, which has the best sensitivity to the Higgs couplings</MathJax>
              </li>
            </ul>
          </Row>
          <Row>
            <Carousel interval={null} variant="dark" activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/Mmiss.png"
                  alt="Missing mass"
                />
                <Carousel.Caption className={styles.carouselCaption}>
                  <MathJax>
                    Missing mass {"\\(M_{\\mathrm{miss}} \\equiv \\sqrt{E_{\\rm miss}^2-P_{T,{\\rm miss}}^2}\\)"}
                  </MathJax>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/pT.png"
                  alt="Scalar sum of the transverse momenta"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/Nchd.png"
                  alt="# of charged tracks"
                />
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row>
            <Pagination className="justify-content-md-center">
              <Stack direction="horizontal" gap={3}>
                <Pagination.Prev onClick={() => setKey("motivations")} />
                <Pagination.Next onClick={() => setKey("approaches")} />
              </Stack>
            </Pagination>
          </Row>
        </Stack>
      </Container >
    );
  }
}