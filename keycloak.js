import { RNKeycloak } from '@react-keycloak/native';

const keycloak = new RNKeycloak({
  url: 'http://localhost:8080', 
  realm: 'maxstore',
  clientId: 'maxstore-client',
  redirectUri: 'maxstore-mobile://Homepage', 
});

export default keycloak;
