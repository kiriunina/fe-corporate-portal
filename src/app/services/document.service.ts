import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Document} from '../models/document';
import {Resolution} from '../models/resolution';
import {Response} from '../models/response';
import {DOCUMENT_MOCKS} from '../mocks/document';
import {RESPONSE_MOCKS} from '../mocks/response';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() { }

  getDocument(id: number): Observable<Document> {
    const document = DOCUMENT_MOCKS.find(item => item.id === id);

    if (document === undefined) {
      throw new Error(RESPONSE_MOCKS[1].message);
    }

    return of(document);
  }

  approveDocument(resolution: Resolution): Observable<Response> {
    return of(RESPONSE_MOCKS[0]);
  }
}
