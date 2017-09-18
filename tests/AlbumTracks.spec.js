import 'jsdom-global/register'
import chai, { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';
import convertToHumanTime from '../src/ConvertToHumanTime';


//Its Better compare HTML/STRING with chai-string
chai.use(require('chai-string'));

describe('AlbumTracks', () => {
  const data = {
    "href" : "https://api.spotify.com/v1/albums/6peEdPVO73WtgGah5sEhX4/tracks?offset=0&limit=20",
    "items" : [ {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3YcBF2ttyueytpXtEzn1Za"
        },
        "href" : "https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za",
        "id" : "3YcBF2ttyueytpXtEzn1Za",
        "name" : "Incubus",
        "type" : "artist",
        "uri" : "spotify:artist:3YcBF2ttyueytpXtEzn1Za"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 214946,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2hHYNUiI2gWSkcXdKHLX6c"
      },
      "href" : "https://api.spotify.com/v1/tracks/2hHYNUiI2gWSkcXdKHLX6c",
      "id" : "2hHYNUiI2gWSkcXdKHLX6c",
      "name" : "Version",
      "preview_url" : "https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:2hHYNUiI2gWSkcXdKHLX6c"
    }, {
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3YcBF2ttyueytpXtEzn1Za"
        },
        "href" : "https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za",
        "id" : "3YcBF2ttyueytpXtEzn1Za",
        "name" : "Incubus",
        "type" : "artist",
        "uri" : "spotify:artist:3YcBF2ttyueytpXtEzn1Za"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 191533,
      "explicit" : false,
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/41Pw0RgCSdPxc5UVbfvBdD"
      },
      "href" : "https://api.spotify.com/v1/tracks/41Pw0RgCSdPxc5UVbfvBdD",
      "id" : "41Pw0RgCSdPxc5UVbfvBdD",
      "name" : "A Certain Shade of Green",
      "preview_url" : "https://p.scdn.co/mp3-preview/98c0726f0c138730ecbfb01e8ceb8b5174fb704f?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:41Pw0RgCSdPxc5UVbfvBdD"
    }
    ],
    "limit" : 20,
    "next" : "https://api.spotify.com/v1/albums/6peEdPVO73WtgGah5sEhX4/tracks?offset=20&limit=20",
    "offset" : 0,
    "previous" : null,
    "total" : 28
  };

  const markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Version</p>
      <p class="music-duration">${convertToHumanTime(214946)}</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/98c0726f0c138730ecbfb01e8ceb8b5174fb704f?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">2</p>
      <p class="music-title">A Certain Shade of Green</p>
      <p class="music-duration">${convertToHumanTime(191533)}</p>
    </div>`;


  it('should be exists', () => {
    expect(renderAlbumTracks).to.be.an.object;
  });

  it('should create and append the markup given correct date pass', () => {
    const element = document.createElement('div');

    renderAlbumTracks(data, element);
    expect(element.innerHTML).to.equalIgnoreSpaces(markup);


  });


});
