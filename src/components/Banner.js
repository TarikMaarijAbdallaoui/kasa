

function Banner({image, printText}) {
        
        const Texte = () => <p>{image.text}</p>

        return (
                <div className='banner'>
                        <div className='super'>
                        <img src={image.url} alt={image.text} />
                        </div>
                        {printText && <Texte />}
                        
                </div>
        );
      }
      
export default Banner;