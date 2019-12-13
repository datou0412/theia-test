import { injectable } from 'inversify';
import { FileStat } from '@theia/filesystem/lib/common';
import { FileSystemNode } from '@theia/filesystem/lib/node/node-filesystem';



@injectable()
export class SecurityFileSystemNode extends FileSystemNode {

  async resolveContent(uri: string, options?: { encoding?: string }): Promise<{ stat: FileStat, content: string }> {
    console.log('ahahahahahha')
    return super.resolveContent(uri, options);
  }
}
