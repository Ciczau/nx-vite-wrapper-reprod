import type { ExecutorContext } from "@nx/devkit";
import {
  viteBuildExecutor,
  type ViteBuildExecutorOptions,
} from "@nx/vite/executors";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function* runExecutor(
  options: Record<string, any> & ViteBuildExecutorOptions,
  context: ExecutorContext,
) {
  yield* viteBuildExecutor(options, context);
}

export default runExecutor;
