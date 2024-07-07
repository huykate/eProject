import './Sitemap.css';

function Sitemap(){
    return(
        <>
            <div className='Sitemap'><img useMap='#sitemap' src={process.env.PUBLIC_URL + '../img/Banner-hero img/site map.png'} class=" img-fluid" alt="Site map"></img></div>
            <map name="sitemap">
                <area shape="rect" coords="430,115,550,150" href="/" alt="Home" />
                <area shape="rect" coords="5,115,120,150" href="/Product" alt="Product" />
                <area shape="rect" coords="140,115,260,150" href="/Product/1" alt="Product Detail" />
                <area shape="rect" coords="280,115,400,150" href="/aboutus" alt="About us" />
                <area shape="rect" coords="425,115,540,150" href="/contactus" alt="Contact us" />
                <area shape="rect" coords="570,115,690,150" href="/sitemap" alt="Site map" />
                <area shape="rect" coords="700,115,815,150" href="/cart" alt="Cart" />
                <area shape="rect" coords="835,115,950,150" href="/Gallery" alt="gallery" />
            </map>
        </>
    );
}
export default Sitemap;