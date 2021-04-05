export interface IUser {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: null | string;
  image: string;
  token: string;
}

const userActions = {
  changeRegStatus: (errors: string): { type: string; errors: string } => ({ type: 'CHANGE_REG_STATUS', errors }),

  successRegistration: (status: boolean): { type: string; status: boolean } => ({
    type: 'SUCCESS_REGISTRATION',
    status,
  }),

  changeAuthStatus: (errors: string): { type: string; errors: string } => ({ type: 'CHANGE_AUTH_STATUS', errors }),

  successAuth: (user: IUser): { type: string; user: IUser } => ({ type: 'SUCCESS_AUTH', user }),

  changeEditStatus: (errors: string): { type: string; errors: string } => ({ type: 'CHANGE_EDIT_STATUS', errors }),

  successEditing: (user: IUser): { type: string; user: IUser } => ({ type: 'SUCCESS_EDITING', user }),

  changeLoginStatus: (status: boolean): { type: string; status: boolean } => ({ type: 'CHANGE_LOGIN_STATUS', status }),

  changeFetchFeil: (status: boolean): { type: string; status: boolean } => ({ type: 'CHANGE_FETCH_FEIL', status }),
};

export default userActions;
