export type UserType = {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  bio: null | string;
  image: string;
  token: string;
};

type AuthorType = {
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
};

export type ContentType = {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: AuthorType;
  favorited: boolean;
  favoritesCount: number;
};

export type DataType = {
  articles: ContentType[];
  articlesCount: number;
};