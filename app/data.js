import uuidV4 from 'uuid';
const data = {
  title: 'Target title',
  cols: [
    { id: uuidV4(),
      title: 'Axis title',
      showInput: false,
      rows: []
    },
    { id: uuidV4(),
      title: 'Axis title',
      showInput: false,
      rows: []
    },
    { id: uuidV4(),
      title: 'Axis title',
      showInput: false,
      rows: []
    }
  ]
};

export default data;
