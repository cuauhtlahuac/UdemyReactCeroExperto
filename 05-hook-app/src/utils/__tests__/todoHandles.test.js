import { handleComplete, handleDelete, handleSubmit } from 'utils/todoHandles';
import { mockTodo } from 'fixtures/todoMock';

describe('todoHandles Tests', () => {
	const props = { todo: mockTodo[0], index: 0, dispatch: jest.fn() };

	test('should call handleDelete', () => {
		const handleDeleteMock = jest.fn(handleDelete);

		handleDeleteMock(props.todo.id, props.dispatch);

		expect(handleDeleteMock).toHaveBeenCalled();
		expect(handleDeleteMock).toHaveBeenCalledWith(1, props.dispatch);
	});

	test('should call handleComplete', () => {
		const handleCompleteMock = jest.fn(handleComplete);

		handleCompleteMock(props.todo.id, props.dispatch);

		expect(handleCompleteMock).toHaveBeenCalledWith(1, props.dispatch);
	});

	test('should call handleSubmit', () => {
		const handleSubmitMock = jest.fn(handleSubmit);
		const submitProps = {
			e: { preventDefault: jest.fn() },
			dispatch: jest.fn(),
			reset: jest.fn(),
			description: 'any text',
		};

    const { e, dispatch, reset, description } = submitProps;

		handleSubmitMock(e, dispatch, reset, description);
  });  
});
