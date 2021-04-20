let questions = {
  GroupID: 'Group 1',
  Questions: [
    {
      Id: 11,
      Question: 'บ้านเลขที่บัจจุบันของคุณคือ ?',
      Expect: 3,
      Result: null,
      Type: null,
      IsDisable: false,
      Referen: [1122],
      Answers: [
        { value: 1, label: '1234/25' },
        { value: 2, label: '5443/23' },
        { value: 3, label: '567/2' },
      ],
    },
    {
      Id: 1122,
      Question: 'บ้านเลขที่ของคุณคือ xxxxxxxx ?',
      Expect: null,
      Result: null,
      Type: 'input',
      Referen: [22],
      IsDisable: false,
    },
    {
      Id: 22,
      Question: 'รถของคุณสีอะไร ?',
      Expect: 2,
      Result: null,
      Type: null,
      IsDisable: false,
      Referen: [2233],
      Answers: [
        { value: 1, label: 'สีแดง' },
        { value: 2, label: 'สำฟ้า' },
        { value: 3, label: 'สำชมพู' },
      ],
    },
  ],
};

let groups = [
  {
    Id: '001',
    Name: 'Group 1',
    CreateDate: new Date(),
    CreateBy: 'System',
    UpdateDate: new Date(),
    UpdateBy: 'System update'
  },
  {
    Id: '002',
    Name: 'Group 2',
    CreateDate: new Date(),
    CreateBy: 'System',
    UpdateDate: new Date(),
    UpdateBy: 'System update'
  },
  {
    Id: '003',
    Name: 'Group 3',
    CreateDate: new Date(),
    CreateBy: 'System',
    UpdateDate: new Date(),
    UpdateBy: 'System update'
  },
  {
    Id: '004',
    Name: 'Group 4',
    CreateDate: new Date(),
    CreateBy: 'System',
    UpdateDate: new Date(),
    UpdateBy: 'System update'
  },
];

export default {
  questions,
  groups
};
