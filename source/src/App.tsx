import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'animate.css';

import '../src/assets/css/animate.css';
import '../src/assets/css/font-awesome.css';
import '../src/assets/css/flaticon-set.css';

import '../src/assets/css/validnavs.css';
import '../src/assets/css/helper.css';
import '../src/assets/css/unit-test.css';
import '../src/assets/css/shop.css';
import '../src/assets/css/style.css'

import Dependency from './components/utilities/Dependency';
import RoutesScrollToTop from './components/utilities/RoutesScrollToTop';
import Routers from './Routers';
import ReduxWrapper from './components/utilities/ReduxWrapper';

function App() {
  return (
    <>
      <ReduxWrapper>
        <Routers />
        <RoutesScrollToTop />
        <Dependency />
      </ReduxWrapper>
    </>
  )
}

export default App
