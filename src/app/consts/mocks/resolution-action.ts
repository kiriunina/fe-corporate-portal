import {ResolutionAction} from '../../models/resolution-action';
import {ResolutionState} from '../../enum/resolution-state';

export const RESOLUTION_ACTIONS_MOCKS: ResolutionAction[] = [
  {
    name: 'Полностью согласен',
    action: ResolutionState.COMPLETELY_APPROVED,
  },
  {
    name: 'Согласен',
    action: ResolutionState.APPROVED,
  },
  {
    name: 'Не согласен',
    action: ResolutionState.DISAGREE,
  },
  {
    name: 'Разрешаю красить в синий цвет',
    action: ResolutionState.PAINT_BLUE,
  },
];
