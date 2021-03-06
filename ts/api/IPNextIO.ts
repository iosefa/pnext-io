import ITreeQuery from './ITreeQuery'
import ITree from './ITree'
import INodeQuery from './INodeQuery'
import IPointQuery from './IPointQuery'
import INode from './INode'
import INodeWithTree from './INodeWithTree'
import { ReadableStream } from 'ts-stream'

export default interface IPNextIO {
  /**
   * Information about a list of trees given in the source
   */
  getTrees (query?: ITreeQuery): ReadableStream<ITree>,

  /**
   * Information about a single tree given in the source
   *
   * (Convenience wrapper)
   */
  getTree (id: string, metadataProperties?: string[]): PromiseLike<ITree>,

  /**
   * Query for a set of nodes based on the camera position
   */
  getNodes (query?: INodeQuery): ReadableStream<INode>,

  /**
   * Query for a set nof nodes with the trees already added as reference
   */
  getNodesWithTrees (query?: INodeQuery): ReadableStream<INodeWithTree>,

  /**
   * Requesting the actual node data from the server.
   */
  getPoints (query?: IPointQuery): ReadableStream<{ [k: string]: any }>
}
