import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home/components/home.tsx"),
    
    route("signup", "routes/auth/components/sign_up.tsx"),
    route("signin", "routes/auth/components/sign_in.tsx"),
    route("room", "routes/room/components/room.tsx"),
    route("create-prompt", "routes/create_prompt/components/create_prompt.tsx"),
    
] satisfies RouteConfig;
