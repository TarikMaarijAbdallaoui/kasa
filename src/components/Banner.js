

function Banner({props}) {
        const {url, text} = props

        return (
                <div className='banner'>
                        <div className='super'>
                        <img src={url} alt={text} />
                        </div>
                        
                        <p>Chez vous, partout et ailleurs</p>
                </div>
        );
      }
      
export default Banner;