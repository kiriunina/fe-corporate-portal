import {Document} from '../../models/document';
import {Resolution} from '../../models/resolution';
import {Response} from '../../models/response';
import {Observable} from 'rxjs';

export const DOCUMENT_SERVICE_TOKEN = 'DocumentServiceToken';

export interface IDocumentService {
  getDocument(id: number): Observable<Document>;
  approveDocument(resolution: Resolution): Observable<Response>;
}
