import toDoReducer, {add, edit, remove, toggle} from '../src/redux/toDoSlice';


describe('Redux tests', () => {

  const items = [
    {
      key: 1,
      name: 'Write some unit tests',
      done: true,
    },
  ];

  it('should add an item to the store', () => {
    const response = toDoReducer(
      {
        items: [],
      },
      {
        type: add.type,
        payload: items[0],
      });

    expect(response.items).toEqual(items);
  });

  it('should remove an item from the store', () => {
    const response = toDoReducer(
      {
        items: items,
      },
      {
        type: remove.type,
        payload: 1,
      });

    expect(response.items).toEqual([]);
  });

  it('should edit an item', () => {
    const response = toDoReducer(
      {
        items: items,
      },
      {
        type: edit.type,
        payload: {
          key: 1,
          name: 'new task text',
        },
      });

    const item = response.items[0];

    expect(item.name).toEqual('new task text');
  });

  it('should change the task state', () => {
    const response = toDoReducer(
      {
        items: items,
      },
      {
        type: toggle.type,
        payload: 1
      });

    const item = response.items[0];

    expect(item.done).toEqual(false);
  });
});
