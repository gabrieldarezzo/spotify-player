import 'jsdom-global/register'
import chai, { expect } from 'chai';
import ConvertToHumanTime from '../src/ConvertToHumanTime';


describe('ConvertToHumanTime', () => {

  it('should be exists', () => {
    expect(ConvertToHumanTime).to.be.an.object;
  });

  it('should work with zero time', () => {
    expect(ConvertToHumanTime(0)).to.be.equal('0:00');
  });

  it('convert 1000ms to "0:01"', () => {
    expect(ConvertToHumanTime(1000)).to.be.equal('0:01');
  });

  it('convert 11000ms to "0:11"', () => {
    expect(ConvertToHumanTime(11000)).to.be.equal('0:11');
  });

  it('convert 60000ms to "1:00"', () => {
    expect(ConvertToHumanTime(60000)).to.be.equal('1:00');
  });

  it('convert 119000ms to "1:59"', () => {
    expect(ConvertToHumanTime(119000)).to.be.equal('1:59');
  });

  it('break test convert 118900ms to "1:59"', () => {
    expect(ConvertToHumanTime(119000)).to.be.equal('1:59');
  });



});
