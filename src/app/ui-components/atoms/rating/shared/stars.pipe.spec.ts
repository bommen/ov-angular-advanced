import { StarsPipe } from './stars.pipe';

describe('StarsPipe', () => {
  it('covert a rating to stars', () => {
    const createStars = jasmine.createSpy();
    const pipe = new StarsPipe({ createStars } as any);
    pipe.transform(5);
    expect(createStars).toHaveBeenCalledTimes(1);
    expect(createStars).toHaveBeenCalledWith(5);
  });
});
