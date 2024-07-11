export interface QuestionsInterface {
  _id: string;
  question: string;
  answer: string;
  options: string[];
}

export interface VideoInterface {
  url: string;
  duration: number;
  thumbnail: string;
  _id: string;
}

export interface LectureInterface {
  _id: string;
  title: string;
  description: string;
  video: VideoInterface;
  questions: [
    {
      timestamp: number;
      _id: string;
      question: QuestionsInterface;
    }
  ];
}

export interface CourseInterface {
  _id: string;
  tag: string;
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  lectures: [
    {
      index: number;
      lecture: LectureInterface;
    }
  ];
}
