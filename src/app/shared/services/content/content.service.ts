import { Injectable } from '@angular/core';
import { COMPONENTNAME, CONTENT } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent = (componentName: string) => CONTENT.split(COMPONENTNAME).join(componentName);

}
