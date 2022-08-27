import { Stack } from 'react-bootstrap';
import Layout from '../components/layout';
import Slides from '../components/slides';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/utils.module.css'
import { MathJaxContext, MathJax } from 'better-react-mathjax';

export default function Home() {
  return (
    <Layout title="PPP2022 poster by So Chigusa">
      <MathJaxContext>
        <div className={styles.main}>
          {/* <Stack gap={3}>
            <h2 className={styles.subject}>
              Deeply Learned Preselection of Higgs Dijet Decays at Future Lepton Colliders
            </h2>
            <h3>
              SC, Shu Li, Yuichiro Nakai, Wenxing Zhang, Yufei Zhang, and Jiaming Zheng
            </h3>
            <h3>
              Phys. Lett. B 833 (2022) 137301 [2202.02534]
            </h3>
          </Stack> */}
          <Slides />
        </div>
      </MathJaxContext>
    </Layout >
  );
}
