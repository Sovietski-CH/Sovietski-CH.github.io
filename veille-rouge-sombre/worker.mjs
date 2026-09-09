export default {
 async fetch(request, env) {
  if (!["GET","HEAD"].includes(request.method)) return new Response("Méthode non autorisée",{status:405,headers:{Allow:"GET, HEAD"}});
  let path=new URL(request.url).pathname;
  if(path==="/index.html")path="/";
  if(path.length>1)path=path.replace(/\/$/,"");
  if(!(/^\/$|^\/(archives|sources)$|^\/archives\/\d{4}-\d{2}-\d{2}(?:-inaugurale|\.pdf)?$/.test(path)))return new Response("Page introuvable",{status:404});
  try {
   const item=await env.PUBLICATIONS.get(path,"json");
   if(!item)return new Response("Page introuvable",{status:404});
   const headers={"Content-Type":item.type,"Cache-Control":"public, max-age=60","X-Content-Type-Options":"nosniff"};
   if(item.type==="application/pdf")headers["Content-Disposition"]='inline; filename="veille-rouge-sombre-'+path.split("/").pop()+'"';
   const body=request.method==="HEAD"?null:item.base64?Uint8Array.from(atob(item.base64),c=>c.charCodeAt(0)):item.body;
   return new Response(body,{headers});
  }catch{return new Response("Publication temporairement indisponible",{status:503,headers:{"Retry-After":"60"}});}
 }
};