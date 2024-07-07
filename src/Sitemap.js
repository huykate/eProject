import './Sitemap.css';

function Sitemap(){
    return(
        <>
            <div className='Sitemap'><img useMap='#sitemap' src={process.env.PUBLIC_URL + '../img/Banner-hero img/site map.png'} class=" img-fluid" alt="Site map"></img></div>
            <map name="sitemap">
                <area shape="rect" coords="403,37,560,80" href="/" alt="Home" />
                <area shape="rect" coords="30,130,185,180" href="/Product" alt="Product" />
                <area shape="rect" coords="215,130,380,180" href="/Gallery" alt="gallery" />
                <area shape="rect" coords="400,130,560,180" href="/aboutus" alt="About us" />
                <area shape="rect" coords="580,130,750,180" href="/contactus" alt="Contact us" />
                <area shape="rect" coords="770,130,940,180" href="/sitemap" alt="Site map" />
                {/* <area shape="rect" coords="215,130,380,180" href="/Gallery" alt="gallery" /> */}
            </map>
        </>
    );
}
export default Sitemap;