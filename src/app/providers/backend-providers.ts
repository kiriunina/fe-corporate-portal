import {AUTH_SERVICE_TOKEN} from '../services/interfaces/iauth-service';
import {AuthServiceMock} from '../services/mocks/auth.service';
import {DOCUMENT_SERVICE_TOKEN} from '../services/interfaces/idocument-service';
import {DocumentServiceMock} from '../services/mocks/document.service';

export const BACKEND_MOCK_PROVIDERS = [
  {provide: AUTH_SERVICE_TOKEN, useClass: AuthServiceMock},
  {provide: DOCUMENT_SERVICE_TOKEN, useClass: DocumentServiceMock}
];
