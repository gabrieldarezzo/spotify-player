import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify', () => {

  it('should be an object', () => {
    expect(spotify).to.be.an.object;
  });

  it('should have search methods', () => {
    expect(spotify.search).to.be.exist;
  });


});
