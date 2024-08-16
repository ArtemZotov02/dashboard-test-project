import Layout from '../components/layout/Layout'
import '../styles/pages/index.scss';


export default function App({ Component, pageProps }) {

  return (
    <div className="app">
      <Layout>
        <Component {...pageProps} />  
      </Layout>
    </div>
  )
}
