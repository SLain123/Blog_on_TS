import { ContentType } from '../../types/types';

const articleActions = {
  getArticle: (content: ContentType): { type: string; content: ContentType } => ({ type: 'GET_ARTICLE', content }),

  failDownloadArticle: (error: string): { type: string; error: string } => ({
    type: 'FAIL_DOWNLOAD_ARTICLE',
    error,
  }),

  makeLoadStatus: (): { type: string } => ({ type: 'MAKE_LOAD_STATUS' }),

  changeCreateEditStatus: (status: boolean): { type: string; status: boolean } => ({
    type: 'CHANGE_CREATE_OR_EDIT_ARTICLE_STATUS',
    status,
  }),

  changeIsUserEditStatus: (status: boolean): { type: string; status: boolean } => ({
    type: 'CHANGE_IS_USER_EDIT_STATUS',
    status,
  }),

  changeDisplayModalStatus: (status: boolean): { type: string; status: boolean } => ({
    type: 'CHANGE_DISPLAY_MODAL_STATUS',
    status,
  }),
};

export default articleActions;
