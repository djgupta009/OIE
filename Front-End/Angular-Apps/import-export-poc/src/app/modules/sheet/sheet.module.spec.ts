import { SheetModule } from './sheet.module';

describe('SheetModule', () => {
  let sheetModule: SheetModule;

  beforeEach(() => {
    sheetModule = new SheetModule();
  });

  it('should create an instance', () => {
    expect(sheetModule).toBeTruthy();
  });
});
