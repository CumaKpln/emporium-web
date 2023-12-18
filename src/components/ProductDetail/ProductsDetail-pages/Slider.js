import { Carousel } from 'react-carousel-minimal';
import { useSelector } from 'react-redux';

function App() {
    const selectedProduct = useSelector((state) => state.products.selectedProduct);

    console.log(selectedProduct, "detay slider 1")

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    const images = selectedProduct.selectedFiles.map((file, index) => ({
        image: file.url,
        index: index, // Dizi içindeki her bir dosya için index değeri oluşturuluyor
    }));


    return (
        <div className="App">
            <Carousel
                data={images}
                time={10000}
                width="100%"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="gray"
                slideImageFit="contain"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                }}
            />
        </div>
    );
}

export default App;

