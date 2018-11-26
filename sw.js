const CACHE_NAME='mi_cache_prueba';


//esto es lo que se guarda en cache
var UrlToCache= [
	'./',
	'./estilos/banner.css',
	'./estilos/blog.css',
	'./estilos/contenedor.css',
	'./estilos/estilospistas.css',//checar la P mayuscula
	'./estilos/info.css',
	'./estilos/menu.css',			//checar la M mayuscula
	'./imagenes/a1',
	'./imagenes/a2',
	'./imagenes/a3',
	'./imagenes/fondo',
	'./imagenes/p1',
	'./imagenes/p2',
	'./imagenes/p3',
	'./imagenes/p4',
	/*
	'./jquery/jquery-latest.js',
	'./jquery/main.js',
	'./jquery/menu.js',
	*/
	'./pistas/im_yours',
	'./pistas/inspirador',
	'./pistas/love_me',
	'./pistas/ojos_color_sol',
	'./pistas/photograph',
	'./pistas/te_regalo',
	//todos los estilos, fuentes, pistas,  e imagenes
	//no debe de contener mayusculas ni espacios

];

//evento de instalacion
//instalacion y guarda en cache
self.addEventListener('install', e=>{
	e.waitUntil(
		caches.open(CACHE_NAME)
		.then(cache=>{
			return cacheaddAll(UrlToCache)
			.then(()=>{
				self.skipWaiting();
			});
		}).catch(err=>
			console.log('no se ha registrado el cache',err)));
	});
	
/*Activacion de app*/
self.addEventListener('activate', e=>{
	const cacheWhiteList=[CACHE_NAME];
	e.waitUntil(
		caches.keys()
			then(cacheNames=>{
				return Promise.all(cacheNames.map(cacheName=>{
					if(cacheWhiteList.indexOf(cacheName)===- 1){
						return caches.delete(cacheName);
					}
			})
	);
})
.then((=>{
	self.clients.claim();
})
);
});

/*evento fetch traer desde internet*/
self.addEventListener('fetch' ,e=>{
	e.respondWith(
	caches.math(e.request)
		.then(res=>{
			if(res){
				//devolver datos desde el cache
				return res;
			}
			return fetch(e.request);
		})
	);
});