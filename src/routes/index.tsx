import {
  Home,
  About,
  Backstage,
  ClipsPage,
  Faces,
  Profile,
  ClipView,
} from "../page";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/clips", element: <ClipsPage /> },
  { path: "/clips/:id", element: <ClipView /> },
  { path: "/backstage", element: <Backstage /> },
  { path: "/faces", element: <Faces /> },
  { path: "/faces/:id", element: <Profile /> },
];

export default routes;
