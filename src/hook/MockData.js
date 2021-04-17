let question = {
  GroupID: 'Group 1',
  Questions: [
    {
      Id: 11,
      Question: 'บ้านเลขที่บัจจุบันของคุณคือ ?',
      Expect: 3,
      Result:null,
      Type: null,
      Answers: [
        { Id: 1, Answer: '1234/25' },
        { Id: 2, Answer: '5443/23' },
        { Id: 3, Answer: '567/2' },
      ],
    },
    {
      Id: 22,
      Question: 'รถของคุณสีอะไร ?',
      Expect: 2,
      Result:null,
      Type: null,
      Answers: [
        { Id: 1, Answer: 'สีแดง' },
        { Id: 2, Answer: 'สำฟ้า' },
        { Id: 3, Answer: 'สำชมพู' },
      ],
    },
  ],
};

export default {
  question,
};
