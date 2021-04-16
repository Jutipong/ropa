let question = {
  GroupID: 'Group 1',
  Questions: [
    {
      Id: 11,
      Question: 'บ้านเลขที่บัจจุบันของคุณคือ ?',
      CorrectAnswer: 3,
      Type: null,
      Answers: [
        { Id: 1, Answer: '1234/25', result: null },
        { Id: 2, Answer: '5443/23', result: null },
        { Id: 3, Answer: '567/2', result: null },
      ],
    },
    {
      Id: 22,
      Question: 'รถของคุณสีอะไร ?',
      CorrectAnswer: 2,
      Type: null,
      Answers: [
        { Id: 1, Answer: 'สีแดง', result: null },
        { Id: 2, Answer: 'สำฟ้า', result: null },
        { Id: 3, Answer: 'สำชมพู', result: null },
      ],
    },
  ],
};

export default {
  question,
};
