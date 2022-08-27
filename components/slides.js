import { MathJax } from 'better-react-mathjax';
import { useState } from 'react';
import { Container, Row, Tab, Tabs, Figure, Stack, Pagination, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/Image';
import styles from './slides.module.css';

let pages = [
  { id: "title", title: "Title" },
  { id: "motivations", title: "Motivations" },
  { id: "characteristics", title: "Characteristic variables" },
  { id: "cutflow", title: "Cut flow" },
  { id: "approaches", title: "Approaches" },
  { id: "results", title: "Preselection results" },
  { id: "prospects", title: "Prospects" },
];

export default function Slides() {
  const [key, setKey] = useState("title");

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

export function Slide({ id, setKey }) {
  if (id == "title") {
    return (
      <Container className={styles.slide}>
        <Stack gap={3}>
          <Row>
            <div className={styles.figureBox} style={{ height: 180 }}>
              <Image src="/images/title.png" layout="fill" objectFit="contain" />
            </div>
          </Row>
          <Row>
            <ul className={styles.list_triangle}>
              <li>
                Download the poster PDF (in Japanese) from <Link href="/files/poster.pdf"><a>here</a></Link>
              </li>
              <li>
                Download our paper from <a href="https://arxiv.org/abs/2202.02534" target="_blank">here</a>
              </li>
            </ul>
          </Row>
          <Row>
            <Pagination className="justify-content-md-center">
              <Stack direction="horizontal" gap={3}>
                <Pagination.Prev disabled="true" />
                <Pagination.Next onClick={() => setKey("motivations")} />
              </Stack>
            </Pagination>
          </Row>
        </Stack>
      </Container>
    );
  } else if (id == "motivations") {
    return (
      <Container className={styles.slide}>
        <Stack gap={3}>
          <Row>
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
                It is the so-called "Higgs Preselection" procedure.
              </li>
            </ul>
          </Row>
          <Row>
            {/* <Figure>
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
          </Figure> */}
            <div className={styles.figureBox} style={{ height: 240 }}>
              <Image src="/images/ee2zh2vvbb_annotation.png" layout="fill" objectFit="contain" />
            </div>
          </Row>
          <Row>
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
                    Boosted Decision Tree (BDT)
                    <a href="http://indico.ihep.ac.cn/event/6495/session/1/contribution/6/material/slides/0.pdf" target="_blank">
                      slide by Bai '16
                    </a>
                  </Stack>
                </li>
                <li className={styles.emph}>
                  Deep Learning
                </li>
              </ul>
            </ul>
          </Row>
          <Row>
            <Pagination className="justify-content-md-center">
              <Stack direction="horizontal" gap={3}>
                <Pagination.Prev onClick={() => setKey("title")} />
                <Pagination.Next onClick={() => setKey("characteristics")} />
              </Stack>
            </Pagination>
          </Row>
        </Stack>
      </Container >
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
              <li className={styles.emph}>
                We use the following characteristic variables of the signal events
              </li>
            </ul>
          </Row>
          <Row>
            <Carousel interval={null} variant="dark" activeIndex={index} onSelect={handleSelect} className={styles.carouselInner}>
              <Carousel.Item>
                {/* <OverlayTrigger
                  placement="auto"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip("Mmiss")}
                > */}
                <img
                  className="d-block w-100"
                  src="/images/Mmiss.png"
                  alt="Missing mass"
                />
                {/* </OverlayTrigger> */}
                <Carousel.Caption className={styles.carouselCaption}>
                  <MathJax>
                    ① Missing mass {"\\(M_{\\mathrm{miss}} \\equiv \\sqrt{E_{\\rm miss}^2-P_{T,{\\rm miss}}^2}\\)"}
                  </MathJax>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/pT.png"
                  alt="Scalar sum of the transverse momenta"
                />
                <Carousel.Caption className={styles.carouselCaption}>
                  <MathJax>
                    ② Scalar sum of visible momenta {"\\(p_T, p_L\\)"}<br />
                    Maximum track momentum {"\\(p_{\\rm max}\\)"}
                  </MathJax>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/Nchd.png"
                  alt="# of charged tracks"
                />
                <Carousel.Caption className={styles.carouselCaption}>
                  <MathJax>
                    ③ Number of charged tracks {"\\(N_{\\rm chd}\\)"}
                  </MathJax>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/jettiness.png"
                  alt="2-jettiness"
                />
                <Carousel.Caption className={styles.carouselCaption}>
                  <MathJax>
                    ④ 2-jettiness parameterized by {"\\(Y_{12}, Y_{23}\\)"}
                  </MathJax>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.jp/32/003060/e0e0e0/286x180.png?text=No Image"
                  alt="Dijet invariant mass"
                />
                <Carousel.Caption className={styles.carouselCaption}>
                  <MathJax>
                    ⑤ Dijet invariant mass {"\\(M_{jj}\\)"}
                  </MathJax>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row>
            <Pagination className="justify-content-md-center">
              <Stack direction="horizontal" gap={3}>
                <Pagination.Prev onClick={() => setKey("motivations")} />
                <Pagination.Next onClick={() => setKey("cutflow")} />
              </Stack>
            </Pagination>
          </Row>
        </Stack>
      </Container>
    );
  } else if (id == "cutflow") {
    return (
      <Container className={styles.slide}>
        <Stack gap={3}>
          <Row>
            <ul className={styles.list_triangle}>
              <li>Cut flow used for the "cut and count" analysis</li>
            </ul>
          </Row>
          <Row>
            <div className={styles.figureBox} style={{ height: 240 }}>
              <Image src="/images/cutflow.png" layout="fill" objectFit="contain" />
            </div>
          </Row>
          <Row>
            <Pagination className="justify-content-md-center">
              <Stack direction="horizontal" gap={3}>
                <Pagination.Prev onClick={() => setKey("characteristics")} />
                <Pagination.Next onClick={() => setKey("approaches")} />
              </Stack>
            </Pagination>
          </Row>
        </Stack>
      </Container>
    );
  } else if (id == "approaches") {
    return (
      <Container className={styles.slide}>
        <Stack gap={3}>
          <Row>
            <ul className={styles.list_triangle}>
              <li>
                For comparison, we redo the analyses based on
                <ul className={styles.list_bar}>
                  <li>Cut and Count</li>
                  <li>BDT</li>
                </ul>
              </li>
              <li className={styles.emph}>
                Our main analysis is based on the fully-connected neural network (FCNN)
              </li>
            </ul>
          </Row>
          <Row>
            <div className={styles.figureBox} style={{ height: 240 }}>
              <Image src="/images/architecture.png" layout="fill" objectFit="contain" />
            </div>
          </Row>
          <Row>
            <Pagination className="justify-content-md-center">
              <Stack direction="horizontal" gap={3}>
                <Pagination.Prev onClick={() => setKey("cutflow")} />
                <Pagination.Next onClick={() => setKey("results")} />
              </Stack>
            </Pagination>
          </Row>
        </Stack>
      </Container>
    );
  } else if (id == "results") {
    return (
      <Container className={styles.slide}>
        <Stack gap={3}>
          <Row>
            <ul className={styles.list_triangle}>
              <li>Table of preselection results for various approaches</li>
              <li>
                <MathJax>The signal significance {"\\(S/\\sqrt{S^2+B^2}\\)"} is maximized for each approach and shown for comparison</MathJax>
              </li>
            </ul>
          </Row>
          <Row>
            <div className={styles.figureBox} style={{ height: 120 }}>
              <Image src="/images/results.png" layout="fill" objectFit="contain" />
            </div>
          </Row>
          <Row>
            <ul className={styles.list_triangle}>
              <li>BDT and FCNN have threshold values of the discrimination</li>
              <li>
                <MathJax>
                  Measurement of each physical quantity is tied to the unique combination {"\\(f(S,B)\\)"}
                </MathJax>
              </li>
              <li className={styles.emph}>
                <MathJax>
                  The threshold value should be determined to maximize {"\\(f(S,B)\\)"}
                </MathJax>
              </li>
            </ul>
          </Row>
          <Row>
            {/* <Figure>
              <Figure.Image
                width={799}
                height={673}
                alt="S vs B"
                src="/images/sigeff.png" />
              <Figure.Caption>
                <MathJax>
                  # of signals {"\\(N_{\\rm sig}\\)"} and # of backgrounds {"\\(N_{\\rm bkg}\\)"} for various choices of threshold values
                </MathJax>
              </Figure.Caption>
            </Figure> */}
            <div className={styles.figureBox} style={{ height: 320 }}>
              <Image src="/images/sigeff.png" layout="fill" objectFit="contain" />
            </div>
          </Row>
          <Row>
            <Pagination className="justify-content-md-center">
              <Stack direction="horizontal" gap={3}>
                <Pagination.Prev onClick={() => setKey("approaches")} />
                <Pagination.Next onClick={() => setKey("prospects")} />
              </Stack>
            </Pagination>
          </Row>
        </Stack>
      </Container>
    );
  } else if (id == "prospects") {
    return (
      <Container className={styles.slide}>
        <Stack gap={3}>
          <Row>
            <ul className={styles.list_triangle}>
              <li>Apply our results to the Yukawa coupling measurement</li>
              <li className={styles.emph}>
                <MathJax>
                  Rough estimation suggests that the sensitivity improvement by a factor of {"\\(\\sim 2\\)"} is available with the FCNN
                </MathJax>
              </li>
            </ul>
          </Row>
          <Row>
            <div className={styles.figureBox} style={{ height: 120 }}>
              <Image src="/images/Yukawa.png" layout="fill" objectFit="contain" />
            </div>
          </Row>
          <Row>
            <ul className={styles.list_triangle}>
              <li>Prospects of important applications</li>
              <ul className={styles.list_bar}>
                <li>More rigorous discussion of Yukawa/self-coupling measurement</li>
                <li>
                  <Stack gap={3} direction="horizontal">
                    Constraints on new physics through SMEFT/HEFT
                    <a href="https://arxiv.org/abs/1512.06877" target="_blank">N. Craig, et al. '15</a>
                  </Stack>

                </li>
                <li>etc., a lot to enjoy!</li>
              </ul>
            </ul>
          </Row>
          <Row>
            <Pagination className="justify-content-md-center">
              <Stack direction="horizontal" gap={3}>
                <Pagination.Prev onClick={() => setKey("results")} />
                <Pagination.Next disabled="true" />
              </Stack>
            </Pagination>
          </Row>
        </Stack>
      </Container>
    );
  }
}

export function SlideTemplate({ children, pageNumber, setKey }) {
  var next = pages[pageNumber + 1].id;
  return (
    <Container className={styles.slide}>
      {children}
      <Row>
        <Pagination className="justify-content-md-center">
          <Stack direction="horizontal" gap={3}>
            <Pagination.Prev disabled={true} />
            <Pagination.Next onClick={() => setKey({ next })} />
          </Stack>
        </Pagination>
      </Row>
    </Container>
  );
}

function renderTooltip(id) {
  if (id == "Mmiss") {
    return (
      <Tooltip id="Mmiss-tooltip" className={styles.mytooltip}>
        <MathJax>
          For {"\\(ZH\\)"} signal events, {"\\(M_{\\rm miss}\\)"} corresponds to the {"\\(Z\\)"} boson mass if {"\\(p_L^{(Z)}=0\\)"}.
        </MathJax>
      </Tooltip>
    )
  }
}