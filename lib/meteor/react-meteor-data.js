const createContainer = jest.fn((options = {}, component) => component );

export const withTracker = jest.fn(Op => jest.fn(C => createContainer(Op, C)));
