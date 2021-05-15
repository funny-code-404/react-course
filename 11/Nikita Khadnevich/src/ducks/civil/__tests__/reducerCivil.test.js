import  { civil, initialCivilState} from '../reducer'
import  { GET_CIVIL_REQUESTED, GET_CIVIL_SUCCEED, GET_CIVIL_FAILED} from '../actions';

describe('REDUCERS', () => {
  it('should return [] when initial state and action are null', () => {
    expect(civil(null, {})).toEqual({});
  });

  it('should update RESPONSE in initState ', () => {

    const actionData = {
      type: GET_CIVIL_SUCCEED,
      response: ['its', 'some' , 'data'],
      isFetching: false
    }

    expect(civil(initialCivilState, actionData)).toEqual({
      ...initialCivilState,
      data: actionData.response,
      isFetching: actionData.isFetching,
    })
  });

  // it('should isFetching is complete', () => {
  //   const initialCivilStateMock = {
  //     data: [],
  //     isFetching: false,
  //   };

  //   const actionData = {
  //     type: GET_CIVIL_SUCCEED,
  //   }

  //   expect(civil(initialCivilStateMock, actionData)).toEqual({
  //     data: actionData.response,
  //     isFetching: true,
  //   }) 
  // });
   // Тест не заработает т.к у меня захардожены состояния компонентов, для примера работы взгляни на файл todos в папке les17 reducers
})

