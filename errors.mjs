import { readFile } from 'fs';
readFile(new URL('app.mj',import.meta.url),'utf-8',(err, data) => {
    if(err){
        throw err;
    }
    else{

    }
})

// try {
//     const result = await asyncAction()
//   } catch (e) {
//     // handle error
//   }