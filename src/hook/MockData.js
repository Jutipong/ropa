let question = {
  GroupID: 'Group 1',
  Questions: [
    {
      Id: 11,
      Question: 'บ้านเลขที่บัจจุบันของคุณคือ ?',
      Expect: 3,
      Result: null,
      Type: null,
      Answers: [
        { value: 1, label: '1234/25' },
        { value: 2, label: '5443/23' },
        { value: 3, label: '567/2' },
      ],
    },
    {
      Id: 1122,
      Question: 'บ้านเลขที่ของคุณคือ xxxxxxxx ?',
      Expect: 1,
      Result: null,
      Type: 'input',
      Referer:[11],
      Answers: [
        { value: 1, label: 'xxxx1111' },
        { value: 2, label: 'xxxx2222' },
        { value: 3, label: 'xxxx3333' },
      ],
    },
    {
      Id: 22,
      Question: 'รถของคุณสีอะไร ?',
      Expect: 2,
      Result: null,
      Type: null,
      Answers: [
        { value: 1, label: 'สีแดง' },
        { value: 2, label: 'สำฟ้า' },
        { value: 3, label: 'สำชมพู' },
      ],
    },
  ],
};

export default {
  question,
};
