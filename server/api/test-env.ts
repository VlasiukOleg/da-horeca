export default defineEventHandler((event) => { 
  return { 
    clientId: process.env.NUXT_STUDIO_AUTH_GITHUB_CLIENT_ID ? "EXISTS" : "MISSING", 
    secret: process.env.NUXT_STUDIO_AUTH_GITHUB_CLIENT_SECRET ? "EXISTS" : "MISSING" 
  } 
})
