import { createSelector } from 'reselect';

export const getApp = state => state.get('app');
export const getAppSettings = createSelector([getApp], app => app.get('settings'));
