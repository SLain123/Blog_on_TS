import { ContentType } from '../../types/types';

type ArticleStateType = {
  content: null | ContentType;
  onLoad: boolean;
  onFail: boolean | string;
  createEditStatus?: boolean;
  isUserEdit: boolean;
  displayModal: boolean;
};

type ActionType = {
  type: string;
  content: ContentType;
  error: string;
  onFail: boolean | string;
  status: boolean;
};

const initState = {
  content: null,
  onLoad: true,
  onFail: false,
  createEditStatus: false,
  isUserEdit: false,
  displayModal: false,
};

const articleReducer = (state: ArticleStateType = initState, action: ActionType): ArticleStateType => {
  switch (action.type) {
    case 'GET_ARTICLE':
      return { ...state, content: action.content, onLoad: false };
    case 'FAIL_DOWNLOAD_ARTICLE':
      return { ...state, onLoad: false, onFail: action.error };
    case 'MAKE_LOAD_STATUS': {
      return { ...state, onLoad: true, onFail: false };
    }
    case 'CHANGE_CREATE_OR_EDIT_ARTICLE_STATUS': {
      return { ...state, createEditStatus: action.status };
    }
    case 'CHANGE_IS_USER_EDIT_STATUS': {
      return { ...state, isUserEdit: action.status };
    }
    case 'CHANGE_DISPLAY_MODAL_STATUS': {
      return { ...state, displayModal: action.status };
    }
    default:
      return state;
  }
};

export default articleReducer;
