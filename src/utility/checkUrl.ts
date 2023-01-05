const checkUrl = (filename: string, width: string, height:string): string => {
    let message = ''
    const filenames = ['encenadaport','fjord', 'icelandwaterfall', 'palmtunnel','santamonica']
       
        // check the filename if is null or not in the filenames
        if(!filename){
            message = 'filename is required'
        }else{
            const result = filenames.some(x=>x==filename)
            if(!result){
                message = 'filename must be one of  {encenadaport,fjord,icelandwaterfall,palmtunnel,santamonica}'
            }            
        }

        // check the if the width is a positive number 
        if(Number.isNaN(parseInt(width))){ 
            message = 'width should be a number'
        }else{
            if(parseInt(width)<1){
                message = 'width should be a positive number'
            }
        }
        // check the if the height is a positive number 
        if(Number.isNaN(parseInt(height))){ 
            message = 'height should be a number'
        }else{
            if(parseInt(height)<1){
                message = 'height should be a positive number'
            }
        }


    return message
}
export default checkUrl