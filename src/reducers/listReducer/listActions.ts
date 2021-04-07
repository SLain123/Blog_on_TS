import { DataType } from '../../types/types';

const listActions = {
  setLoad: (): { type: string } => ({ type: 'SET_LOAD_STATUS' }),

  getArticles: (data: DataType): { type: string; data: DataType } => ({ type: 'GET_ARTICLE_LIST', data }),

  changePage: (page: number): { type: string; page: number } => ({ type: 'CHANGE_PAGE', page }),

  failDownloadArticles: (error: boolean): { type: string; error: boolean } => ({ type: 'FAIL_DOWNLOAD_LIST', error }),
};

export default listActions;
