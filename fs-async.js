const { readFile, writeFile } = require('fs');

readFile('1.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const first = result
        readFile('./2.txt', 'utf8', (error, result) => {
                if(error){
                    console.log(error)
                    return
                }
                const second = result
                writeFile('./3.txt', `${first}, ${second}`, {flag: 'a'}, (error, result) => {
                        if(error){
                            console.log(error)
                            return 
                        }
                    }
                )
            }
        )
    }
)