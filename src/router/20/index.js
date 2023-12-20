import { addBasePath } from "@/utils";

import login from "./login";
import layout from "./layout";

const BASE_PATH = '/20';
const router = [
  ...layout,
  ...login,
];
addBasePath(BASE_PATH, router);

export default router;