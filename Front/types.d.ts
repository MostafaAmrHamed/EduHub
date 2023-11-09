type ExamDetials = {
  titleOfExam: string;
  class: string;
  time: number;
  difficulty: string;
};
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
