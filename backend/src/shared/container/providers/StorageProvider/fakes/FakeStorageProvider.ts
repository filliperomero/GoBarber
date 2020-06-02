import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  private storage: string[] = [];

  public async saveFile(fileName: string): Promise<string> {
    this.storage.push(fileName);

    return fileName;
  }

  public async deleteFile(fileName: string): Promise<void> {
    const findIndex = this.storage.findIndex(
      storageFileName => storageFileName === fileName,
    );

    this.storage.splice(findIndex, 1);
  }
}

export default FakeStorageProvider;
