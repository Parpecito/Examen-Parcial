// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $AgendaServer from "./routes/AgendaServer.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_agendas from "./routes/api/agendas.tsx";
import * as $index from "./routes/index.tsx";
import * as $AgendaClient from "./islands/AgendaClient.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/AgendaServer.tsx": $AgendaServer,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/agendas.tsx": $api_agendas,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/AgendaClient.tsx": $AgendaClient,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
