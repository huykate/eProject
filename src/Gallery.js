import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate} from 'react-router-dom';
import './Gallery.css';

function Gallery(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetch("https://663387b6f7d50bbd9b49b3f2.mockapi.io/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
    }, []); 
    return(
        <div class="container text-center">
            <div class="row align-items-start">
            {products.map( (pro) => 
                (
                    <div key={pro.id} className=' col-sm-12 col-md-6 col-lg-4 '>
                        <Img
                            img_url={pro.img_url}
                            id={pro.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
function Img({img_url,id}){
    var pic=img_url?.split(",")[0]+".jpg"; 
    const navigate = useNavigate();
    return(
        <div onClick={() => navigate(`/Product/${id}`)}>
        <Card className='img__layout'>
            <Card.Img className='img--size'  src={process.env.PUBLIC_URL + "../proImg/"+pic}  />
        </Card>
         </div>                      
    )
  }
export default Gallery;