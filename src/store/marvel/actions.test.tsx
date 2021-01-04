import { getCharactersRequest } from "./actions";
import { GET_CHARACTERS_REQUEST } from "./constants";



describe('actions', () => {
    it('should create an action to request', () => {
      
      const expectedAction = {
        type: GET_CHARACTERS_REQUEST
        

      }

      expect(getCharactersRequest()).toEqual(expectedAction)
      
    })
  })