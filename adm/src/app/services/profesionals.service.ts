import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Constants } from '../app.constants';

@Injectable()
export class ProfesionalsService extends BaseService {

  getApiEndPoint() {
    return Constants.API_METHOD_PROFESIONALS;
  }
}
