import { ContainerModule, interfaces } from 'inversify';
import { FileSystem } from '@theia/filesystem/lib/common';
import { SecurityFileSystemNode } from './node-filesystem';

export default new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind, isBound: interfaces.IsBound, rebind: interfaces.Rebind) => {
  bind(SecurityFileSystemNode).toSelf().inSingletonScope();
  rebind(FileSystem).toService(SecurityFileSystemNode);
});