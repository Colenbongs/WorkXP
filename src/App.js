import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import Post from './pages/post';
import Login from './pages/login';
import Profile from './pages/profile';
import Tab1 from './pages/Tab1';
import usePhotoGallery from './components/usePhotoGallery';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>

        <Route exact path="/login" component={Login } />
            <Route exact path="/">
                  <Redirect to="/login" />
                </Route>
          

          <Route path="/register" component={Register } />
          <Route path="/forgotpassword" component={ForgotPassword } />
          <Route path="/post" component={Post } />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/tab1" component={Tab1} />

         <Route path="/tab1" COMPONENTS={usePhotoGallery}/>
          
    

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
