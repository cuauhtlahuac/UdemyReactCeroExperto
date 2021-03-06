const { types } = require("types/types");

describe('Types tests', () => {

  const typesStructure = {
    login: 'Auth/login',
    logout: 'Auth/logout',
  
    uiSetError: 'UI/Set error',
    uiRemoveError: 'UI/Remove error',
    uiStartLoading: 'UI/Start loading',
    uiFinishLoading: 'UI/Finish loading',
  
    notesAddEntry: 'Notes/New note',
    notesActive: 'Notes/Set active note',
    notesLoad: 'Notes/Load notes',
    notesUpdated: 'Notes/Updated note',
    notesFileUrl: 'Notes/Update file url',
    notesDelete: 'Notes/Delete note',
    notesLogoutAndClean: 'Notes/Logout and clean',
    notesAddNew: 'Notes/Add new note',
  };

  test('should have a same object structure', () => {
    expect(types).toEqual(typesStructure);
  })
  
})
