type userInfo = {
  name: string;
  access_token: string;
};

type loginData = {
  username: string;
  password: string;
};

type classes = {
  _id: string;
  name: string;
};
type getClasses = classes & {
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

type createExam = {
  title: string;
  duration: number;
  difficulty: string;
  class: string;
};
type exam = createExam & {
  _id: string;
  questions: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type uploadImage = {
  _id: string;
  name: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
};
