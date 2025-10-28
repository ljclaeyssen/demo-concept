import { ActionReducer } from '@ngrx/store';

export function loggerMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    // Skip internal NgRx actions
    if (action.type.startsWith('@ngrx') || action.type.startsWith('@@')) {
      return reducer(state, action);
    }

    console.log('%c🍝 [NgRx ACTION]', 'color: #ef4444; font-weight: bold', action.type);
    const result = reducer(state, action);
    console.log('%c🔄 [NgRx REDUCER]', 'color: #dc2626; font-weight: bold', 'State updated');
    return result;
  };
}
