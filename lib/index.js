const _isArray=Array.isArray,{slice:_slice,includes:_includes,concat:_concat,sort:_sort,filter:_filter,reduce:_reduce,map:_map}=Array.prototype,{split:_split}=String.prototype;const equals=a=>b=>a===b,gt=a1=>a2=>a1<a2,gte=a1=>a2=>a1<=a2,lt=a1=>a2=>a1>a2,lte=a1=>a2=>a1>=a2,identity=a=>a,prop=s=>o=>o[s],length=as=>as.length,compose=(f,...fs)=>fs.length?(...args)=>f(compose(...fs)(...args)):f,slice=(s,e)=>as=>_slice.call(as,s,e),head=as=>as[0],init=slice(0,-1),last=compose(head,slice(-1)),tail=slice(1),keys=Object.keys,contains=a=>as=>_includes.call(as,a),concat=(...as)=>_concat.apply([],as),sort=f=>as=>_sort.call(concat([],as),f),map=f=>(as,context=null)=>_map.call(as,f,context),filter=f=>as=>_filter.call(as,f),comparator=f=>(a,b)=>f(a,b)?1:f(b,a)?-1:0,reduce=(f,initial)=>as=>_reduce.call(as,f,initial),values=o=>map(k=>o[k])(keys(o)),flatten=reduce((a,b)=>concat(a,_isArray(b)?flatten(b):b),[]),any=f=>compose(Boolean,length,filter(f)),find=f=>reduce((m,v)=>m||(f(v)?v:m)),uniq=as=>[...new Set(as)],union=compose(uniq,concat),intersection=(xs,ys,zs)=>(zs=new Set(ys))&&filter(x=>zs.has(x))(uniq(xs)),difference=(xs,ys,zs)=>(zs=new Set(ys))&&filter(x=>!zs.has(x))(uniq(xs)),chain=f=>compose(flatten,map(f)),xprod=as=>reduce((m,b)=>concat(m,map(a=>[a,b])(as)),[]),split=a=>b=>_split.call(b,a),path=ss=>o=>reduce((m,s)=>m&&s in m?m[s]:undefined,o)(ss),groupBy=(f,_k)=>reduce((m,a)=>(_k=""+f(a))&&(m[_k]=concat(m[_k]||[],[a]))&&m,{});module.exports={equals,lt,lte,gt,gte,identity,head,init,last,tail,uniq,length,comparator,prop,keys,contains,concat,map,filter,flatten,sort,any,find,union,intersection,difference,chain,xprod,compose,split,path,groupBy}