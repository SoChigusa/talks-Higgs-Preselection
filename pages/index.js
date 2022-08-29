import Layout from '../components/layout';
import Slides from '../components/slides';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/utils.module.css'
import { MathJaxContext, MathJax } from 'better-react-mathjax';

export default function Home() {
  return (
    <Layout
      title="PPP2022 poster by So Chigusa"
      description="Deeply Learned Preselection of Higgs Dijet Decays at Future Lepton Colliders"
    >
      <MathJaxContext>
        <div className={styles.main}>
          <Slides />
        </div>
      </MathJaxContext>
    </Layout >
  );
}
