import { MathJax } from 'better-react-mathjax';
import { createContext, useContext, useState } from 'react';
import { Container, Row, Tab, Tabs, Figure, Stack, Pagination, Carousel, OverlayTrigger, Tooltip, Button, Accordion } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/Image';
import styles from './slides.module.css';

let pages = [
  { id: "title", title: "Title" },
  { id: "motivations", title: "Motivations" },
  { id: "characteristics", title: "Characteristic variables" },
  { id: "cutflow", title: "Cut flow" },
  { id: "approaches", title: "Approaches" },
  { id: "results", title: "Results" },
  { id: "prospects", title: "Prospects" },
];

const KeyContext = createContext();

export default function Slides() {
  const [key, setKey] = useState("title");

  return (
    <KeyContext.Provider value={{ key, setKey }}>
      <Tabs
        id="slides"
        activeKey={key}
        onSelect={(k) => setKey(k)}>
        {pages.map((page, index) => (
          <Tab eventKey={page.id} title={page.title} key={page.id}>
            <Slide pageNumber={index} />
          </Tab>
        ))}
      </Tabs>
    </KeyContext.Provider>
  );
}

export function Slide({ pageNumber }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (pageNumber == 0) {
    return (
      <SlideTemplate pageNumber={pageNumber}>
        <Row>
          <div className={styles.figureBox} style={{ height: 180 }}>
            <Image src="/images/title.png" layout="fill" objectFit="contain" alt="Deeply Learned Preselection of Higgs Dijet Decays at Future Lepton Colliders" />
          </div>
        </Row>
        <Row>
          <ul className={styles.list_triangle}>
            <li>
              Download the poster PDF (in Japanese) from <Link href="/files/poster.pdf"><a>here</a></Link>
            </li>
            <li>
              Download our paper from <a href="https://arxiv.org/abs/2202.02534" target="_blank" rel="noreferrer">here</a>
            </li>
          </ul>
        </Row>
      </SlideTemplate>
    );
  } else if (pageNumber == 1) {
    return (
      <SlideTemplate pageNumber={pageNumber}>
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
              It is the so-called &quot;Higgs Preselection&quot; procedure.
            </li>
          </ul>
        </Row>
        <Row>
          <Figure>
            <Figure.Image
              className="mx-auto d-block"
              width={544 * 0.7}
              height={363 * 0.7}
              alt="e+ e- > z h"
              src="/images/ee2zh2vvbb_annotation.png" />
            <Figure.Caption style={{ textAlign: "center" }}>
              <MathJax>
                The dominant Higgs production process \(e^+ e^- \to Z h\)
                associated with \(Z \to \nu \bar\nu\) and \(h \to b \bar b\).
              </MathJax>
              <MathJax>
                We consider {"\\(\\sqrt{s}=250\\,\\mathrm{GeV}\\)"} and {"\\(\\mathcal{L}=250\\,\\mathrm{fb}^{-1}\\)"} with the unpolarized beams.
              </MathJax>
            </Figure.Caption>
          </Figure>
        </Row>
        <Row>
          <ul className={styles.list_triangle}>
            <li>Various existing/promising approaches</li>
            <ul className={styles.list_bar}>
              <li>
                <Stack direction="horizontal" gap={3}>
                  Cut and Count
                  <a href="https://link.springer.com/article/10.1140/epjc/s10052-013-2343-8" target="_blank" rel="noreferrer">
                    Ono, et al. &apos;12
                  </a>
                </Stack>
              </li>
              <li>
                <Stack direction="horizontal" gap={3}>
                  Boosted Decision Tree (BDT)
                  <a href="http://indico.ihep.ac.cn/event/6495/session/1/contribution/6/material/slides/0.pdf" target="_blank" rel="noreferrer">
                    slide by Bai &apos;16
                  </a>
                </Stack>
              </li>
              <li className={styles.emph}>
                Deep Learning
              </li>
            </ul>
          </ul>
        </Row>
      </SlideTemplate>
    );
  } else if (pageNumber == 2) {
    return (
      <SlideTemplate pageNumber={pageNumber}>
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
              <Image
                className="d-block w-100"
                src="/images/Mmiss.png"
                alt="Missing mass"
              />
              <Carousel.Caption className={styles.carouselCaption}>
                <MathJax>
                  ① Missing mass {"\\(M_{\\mathrm{miss}} \\equiv \\sqrt{E_{\\rm miss}^2-P_{T,{\\rm miss}}^2}\\)"}
                </MathJax>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
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
              <Image
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
              <Image
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
              <Image
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
      </SlideTemplate>
    );
  } else if (pageNumber == 3) {
    return (
      <SlideTemplate pageNumber={pageNumber}>
        <Row>
          <ul className={styles.list_triangle}>
            <li>Cut flow used for the &quot;cut and count&quot; analysis</li>
          </ul>
        </Row>
        <Row>
          <div className={styles.figureBox} style={{ height: 240 }}>
            <Image src="/images/cutflow.png" layout="fill" objectFit="contain" alt="Table of cut flow" />
          </div>
        </Row>
        <Row>
          <Accordion className='d-block w-100 mx-auto'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Supplements</Accordion.Header>
              <Accordion.Body>
                <ul className={styles.list_triangle}>
                  <li className={styles.fine}>
                    <MathJax>
                      {"\\(M_{\\mathrm{miss}}\\)"} and {"\\(M_{jj}\\)"} cuts a large amount of BG events with smoothly distributed (or zero) invariant mass.
                    </MathJax>
                  </li>
                  <li className={styles.fine}>
                    <MathJax>
                      Most of {"\\(q\\bar{q}\\)"} BG events without large missing \(p_T\) are rejected by \(p_T\) and \(p_L\) cuts.
                    </MathJax>
                  </li>
                  <li className={styles.fine}>
                    <MathJax>
                      Most of leptonic BG events are rejected by {"\\(N_{\\rm chd}\\)"} cuts.
                    </MathJax>
                  </li>
                  <li className={styles.fine}>
                    <MathJax>
                      Most of three-prong events from {"\\(W^+ W^-\\)"} and {"\\(e^\\pm \\nu W^\\mp\\)"} channels are rejected by {"\\(Y_{23}\\)"} and {"\\(Y_{12}\\)"} cuts.
                    </MathJax>
                  </li>
                  <li className={styles.fine}>
                    <MathJax>
                      The {"\\(ZZ\\)"} channel is the hardest BG process to remove, while the {"\\(W^{+} W^{-}\\)"} and {"\\(q\\bar{q}\\)"} channels are also non-negligible due to large cross sections.
                    </MathJax>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </SlideTemplate>
    );
  } else if (pageNumber == 4) {
    return (
      <SlideTemplate pageNumber={pageNumber}>
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
            <Image src="/images/architecture.png" layout="fill" objectFit="contain" alt="Architecture of our FCNN" />
          </div>
        </Row>
      </SlideTemplate>
    );
  } else if (pageNumber == 5) {
    return (
      <SlideTemplate pageNumber={pageNumber}>
        <Row>
          <ul className={styles.list_triangle}>
            <li>Table of preselection results for various approaches</li>
            <li>
              <MathJax>The signal significance {"\\(S/\\sqrt{S+B}\\)"} is maximized for each approach and shown for comparison</MathJax>
            </li>
          </ul>
        </Row>
        <Row>
          <div className={styles.figureBox} style={{ height: 120 }}>
            <Image src="/images/results.png" layout="fill" objectFit="contain" alt="Result of preselection" />
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
          <Figure>
            <Figure.Image
              className="mx-auto d-block"
              width={799 * 0.6}
              height={673 * 0.6}
              alt="S vs B"
              src="/images/sigeff.png" />
            <Figure.Caption style={{ textAlign: "center" }}>
              <MathJax>
                # of signals {"\\(N_{\\rm sig}\\)"} and backgrounds {"\\(N_{\\rm bkg}\\)"} for various choices of threshold values
              </MathJax>
            </Figure.Caption>
          </Figure>
        </Row>
      </SlideTemplate>
    );
  } else if (pageNumber == 6) {
    return (
      <SlideTemplate pageNumber={pageNumber}>
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
            <Image src="/images/Yukawa.png" layout="fill" objectFit="contain" alt="Yukawa measurement prospect" />
          </div>
        </Row>
        <Row>
          <ul className={styles.list_triangle}>
            <li>Important applications and prospects</li>
            <ul className={styles.list_bar}>
              <li>Input lower level quantities measured by detectors</li>
              <li>More rigorous discussion of Yukawa measurement with flavor tagging</li>
              <li>Discussion of self-coupling measurement with different final states</li>
              <li>
                <Stack gap={3} direction="horizontal">
                  Constraints on new physics through SMEFT/HEFT
                  <a href="https://arxiv.org/abs/1512.06877" target="_blank" rel="noreferrer">N. Craig, et al. &apos;15</a>
                </Stack>
              </li>
              <li>etc., a lot to enjoy!</li>
            </ul>
          </ul>
        </Row>
      </SlideTemplate>
    );
  }
}

export function SlideTemplate({ children, pageNumber }) {
  const context = useContext(KeyContext);

  var previousButton = (<></>);
  var nextButton = (<></>);
  if (pageNumber > 0) {
    previousButton = (
      <Button variant="primary" onClick={() => context.setKey(pages[pageNumber - 1].id)}>
        &#9664; {pages[pageNumber - 1].title}
      </Button>
    );
  }
  if (pageNumber + 1 < pages.length) {
    nextButton = (
      <Button variant="primary" onClick={() => context.setKey(pages[pageNumber + 1].id)}>
        {pages[pageNumber + 1].title} &#9654;
      </Button>
    );
  }

  return (
    <Container className={styles.slide}>
      <Stack gap={3}>
        {children}
        <Row>
          <Stack className="justify-content-md-center" gap={3} direction="horizontal">
            {previousButton}
            {nextButton}
          </Stack>
        </Row>
      </Stack>
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