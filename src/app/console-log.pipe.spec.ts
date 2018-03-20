import { ConsoleLogPipe } from './console-log.pipe';

describe('ConsoleLogPipe', () => {
  it('create an instance', () => {
    const pipe = new ConsoleLogPipe();
    expect(pipe).toBeTruthy();
  });
});
