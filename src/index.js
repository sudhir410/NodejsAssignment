const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent,(err)=>{
		console.log(err)
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data=await fs.readFile(fileName,'utf-8',(err,data)=>{
		console.log(data)
	})
	console.log(data)
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(err)=>{
		console.log(err)
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName,(err)=>{
		console.log(err)
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }