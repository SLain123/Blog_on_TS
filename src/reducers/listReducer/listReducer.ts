import { DataType, ContentType } from '../../types/types';

const initState = { articles: [], articlesCount: 0, page: 1, onLoad: true, onFail: false };

type ListStateType = {
  articles: ContentType[];
  articlesCount: number;
  page: number;
  onFail: boolean;
  onLoad: boolean;
};

type ActionType = {
  type: string;
  error: boolean;
  page: number;
  data: DataType;
};

const listReducer = (state: ListStateType = initState, action: ActionType): ListStateType => {
  switch (action.type) {
    case 'SET_LOAD_STATUS': {
      return { ...state, onLoad: true, onFail: false };
    }
    case 'GET_ARTICLE_LIST': {
      const { articles, articlesCount } = action.data;

      return { ...state, articles, articlesCount, onLoad: false };
    }
    case 'CHANGE_PAGE': {
      return { ...state, page: action.page, onLoad: true };
    }
    case 'FAIL_DOWNLOAD_LIST': {
      return { ...state, onLoad: false, onFail: action.error };
    }
    default:
      return state;
  }
};

export default listReducer;
