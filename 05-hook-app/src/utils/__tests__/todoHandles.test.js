import { handleComplete, handleDelete, handleSubmit } from 'utils/todoHandles';
import { mockTodo } from 'fixtures/todoMock';
import { todoActions } from 'utils/constants/todoActions';

describe('todoHandles Tests', () => {
	const props = { todo: mockTodo[0], index: 0, dispatch: jest.fn() };

	const submitProps = {
		e: { preventDefault: jest.fn() },
		dispatch: jest.fn(),
		reset: jest.fn(),
		description: 'any text',
	};

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

	test('should call handleSubmit and inside function', () => {
		const { e, dispatch, reset, description } = submitProps;
		const handleSubmitMock = jest.fn(handleSubmit);

		handleSubmitMock(e, dispatch, reset, description);

		expect(handleSubmitMock).toHaveBeenCalledWith(e, dispatch, reset, description);

		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenCalledWith({
			type: todoActions.ADD_TODO,
			payload: {
				id: expect.any(Number),
				task: description,
				done: false,
			},
		});

		expect(reset).toBeCalledTimes(1);
	});

	test('handleSubmit should do nothing with empty describe', () => {
		const { e } = submitProps;
		
		const dispatch = jest.fn();
		const reset = jest.fn();
		const handleSubmitMock = jest.fn(handleSubmit);

		handleSubmitMock(e, dispatch, reset, '');

		expect(dispatch).not.toHaveBeenCalled();
		expect(reset).not.toHaveBeenCalled();

	});
});
