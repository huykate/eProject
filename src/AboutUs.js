import './AboutUs.css';
function AboutUs(){
    
    return(
        <>  
            <div className='Title grid'>
                <div className='Title__top'>WE ARE</div>
                <div className='Title__bottom'> CLARINS</div>
                <div className='Bio'>
                    <div className='Bio__text'>In 2024, Clarins celebrates 70 years of groundbreaking French beauty, featuring formulas powered by nature's most effective ingredients.</div>
                    <div className='Bio__text'>From generation to generation, our iconic products have adorned dressing tables and bathroom vanities around the world.</div>
                    <div className='Bio__text'><b>Here's to seven decades of beautiful innovation, beautiful sharing, and beautiful engagement.</b></div>
                </div>  
            </div> 
                <div className='Title__secondary'>
                    <div className='Title__secondary--text'> From our iconic products to the Clarins Institute, discover what has made us unique for the past seventy years.</div>
                </div>
            <div className=''>
                <img className='' src = {process.env.PUBLIC_URL + '../img/Banner-hero img/christina.jpg'} alt=''></img>
            </div>
        </>
    )
   
}

export default AboutUs;