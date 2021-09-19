import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BackgroundContainer from '../../components/BackgroundContainer/BackgroundContainer';
import { useAuth } from '../../contexts/AuthContext';
import { Redirect, Route } from 'react-router-dom';
import './Home.scss';

/**
 * Create Home page every user is directed to when starting petgo.
 * @returns Home Page component
 */

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <BackgroundContainer>
        </BackgroundContainer>
        </IonContent>
    </IonPage>
  );
};

export default Home;