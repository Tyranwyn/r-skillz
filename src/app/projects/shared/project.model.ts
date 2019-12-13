import { DocumentReference } from '@angular/firefirestore';
import { Location } from './location.model';

export interface Project {
  id: string;
  name: string;
  client: string;
  location: Location;
  active: boolean;
  collaborators: DocumentReference[];
  responsible: DocumentReference[];
  skillsUsed: DocumentReference[];
}
